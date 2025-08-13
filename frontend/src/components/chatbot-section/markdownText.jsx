export default function MarkdownText({ text }) {
  
  /**
   * parseCodeBlocks - First-pass parser to extract code blocks
   * 
   * This function separates the text into code blocks and regular text parts.
   * It must run first because code blocks should not be processed for other markdown.
   * 
   * @param {string} text - The input markdown text
   * @returns {Array} Array of objects with type 'codeblock' or 'text'
   */
  const parseCodeBlocks = (text) => {
    // Regex to match: ```optional-language\ncode content\n```
    // (\w+)? = optional language identifier (e.g., javascript, python)
    // [\s\S]*? = non-greedy match for any characters including newlines
    const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    // Find all code blocks in the text
    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add any text that appears before this code block
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: text.slice(lastIndex, match.index)
        });
      }

      // Add the code block itself
      parts.push({
        type: 'codeblock',
        language: match[1] || 'text', // Use captured language or default to 'text'
        content: match[2].trim()      // Code content (trimmed of whitespace)
      });

      // Update position for next iteration
      lastIndex = match.index + match[0].length;
    }

    // Add any remaining text after the last code block
    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex)
      });
    }

    // Return parts array, or wrap original text if no code blocks found
    return parts.length > 0 ? parts : [{ type: 'text', content: text }];
  };

  /**
   * parseInlineMarkdown - Parses inline markdown formatting
   * 
   * This function handles inline formatting like bold, italic, code, and links.
   * It uses regex patterns to find matches and converts them to React elements.
   * 
   * @param {string} text - Text to parse for inline markdown
   * @returns {Array} Array of strings and React elements
   */
  const parseInlineMarkdown = (text) => {
    // Define patterns for different markdown elements
    const patterns = [
      { regex: /\*\*(.*?)\*\*/g, tag: 'strong', className: 'font-inter text-[#2C5282] font-semibold' }, // **bold**
      { regex: /(?<!\*)\*([^*]+)\*(?!\*)/g, tag: 'em', className: 'italic text-gray-700' }, // *italic* (but not **bold**)
      { regex: /`(.*?)`/g, tag: 'code', className: 'bg-[#f0f4f8] text-[#2C5282] px-2 py-1 rounded text-sm font-mono border border-[#d0d7e0]' }, // `inline code`
      { regex: /\[([^\]]+)\]\(([^)]+)\)/g, tag: 'a', className: 'text-blue-600 hover:underline' }, // [text](url)
    ];

    // Find all matches for each pattern in the text
    const matches = [];
    patterns.forEach(pattern => {
      let match;
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
      while ((match = regex.exec(text)) !== null) {
        // Store match details for processing
        matches.push({
          start: match.index,                    // Where the match starts
          end: match.index + match[0].length,    // Where the match ends
          content: pattern.tag === 'a' ? { text: match[1], href: match[2] } : match[1], // Content (special handling for links)
          tag: pattern.tag,                      // HTML tag to create
          className: pattern.className,          // CSS classes to apply
        });
      }
    });

    // Sort matches by position and filter out overlapping ones
    // Earlier matches take precedence over later ones
    matches.sort((a, b) => a.start - b.start);
    const validMatches = [];
    matches.forEach(match => {
      const hasOverlap = validMatches.some(existing => 
        match.start < existing.end && match.end > existing.start
      );
      if (!hasOverlap) validMatches.push(match);
    });

    // Convert matches into React elements
    let lastIndex = 0;
    const elements = [];
    validMatches.forEach((match, index) => {
      // Add any text before this match
      if (match.start > lastIndex) {
        elements.push(text.slice(lastIndex, match.start));
      }
      
      // Create the React element for this match
      const Tag = match.tag;
      if (Tag === 'a') {
        // Special handling for links (need href and target attributes)
        elements.push(
          <Tag key={index} className={match.className} href={match.content.href} target="_blank" rel="noopener noreferrer">
            {match.content.text}
          </Tag>
        );
      } else {
        // Standard element (strong, em, code)
        elements.push(<Tag key={index} className={match.className}>{match.content}</Tag>);
      }
      lastIndex = match.end;
    });

    // Add any remaining text after the last match
    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return elements.length > 0 ? elements : [text];
  };

  /**
   * renderTextLines - Processes text content line by line
   * 
   * This function handles block-level markdown elements like headings,
   * blockquotes, and lists. Each line is checked for these patterns.
   * 
   * @param {string} textContent - Text content to process
   * @returns {Array} Array of React elements
   */
  const renderTextLines = (textContent) => {
    const lines = textContent.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Check for headings (# ## ###)
      const heading = line.match(/^(#{1,3})\s+(.+)/);
      if (heading) {
        const level = heading[1].length; // Number of # characters
        const sizes = { 1: 'text-2xl font-bold', 2: 'text-xl font-semibold', 3: 'text-lg font-semibold' };
        return <div key={lineIndex} className={`${sizes[level]} mt-2 mb-1`}>{parseInlineMarkdown(heading[2])}</div>;
      }

      // Check for blockquotes (> text)
      const blockquote = line.match(/^>\s+(.+)/);
      if (blockquote) {
        return (
          <div key={lineIndex} className="border-l-2 border-gray-300 pl-4 italic text-gray-600 bg-gray-50 py-1 rounded">
            {parseInlineMarkdown(blockquote[1])}
          </div>
        );
      }

      // Check for list items (- * •)
      const listItem = line.trim().match(/^[-*•]\s+(.+)/);
      if (listItem) {
        return (
          <div key={lineIndex} className="flex items-start space-x-2 ml-4">
            <span className="text-gray-500 mt-0.5">•</span>
            <span>{parseInlineMarkdown(listItem[1])}</span>
          </div>
        );
      }

      // Regular line - just parse inline markdown
      return <div key={lineIndex}>{parseInlineMarkdown(line)}</div>;
    });
  };

  // Main processing: first extract code blocks, then process each part
  const parts = parseCodeBlocks(text);

  // Render the final component
  return (
    <div className="space-y-2 text-gray-800 leading-relaxed">
      {parts.map((part, partIndex) => {
        if (part.type === 'codeblock') {
          // Render code blocks with syntax highlighting styling
          return (
            <div key={partIndex} className="my-3">
              {/* Language header bar */}
              <div className="bg-gray-800 text-gray-100 rounded-t-lg px-3 py-2 text-xs font-mono border-b border-gray-600">
                {part.language}
              </div>
              {/* Code content */}
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto border border-gray-700">
                <code className="font-mono text-sm leading-relaxed whitespace-pre">
                  {part.content}
                </code>
              </pre>
            </div>
          );
        } else {
          // Render regular text content with line-by-line processing
          return (
            <div key={partIndex}>
              {renderTextLines(part.content)}
            </div>
          );
        }
      })}
    </div>
  );
}
