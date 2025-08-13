export default function MarkdownText({ text }) {
  const parseMarkdown = (text) => {
    const patterns = [
      { regex: /\*\*(.*?)\*\*/g, tag: 'strong', className: 'font-inter text-[#5588BB]' },
      { regex: /(?<!\*)\*([^*]+)\*(?!\*)/g, tag: 'em', className: 'font-inter italic text-gray-700' },
      { regex: /`(.*?)`/g, tag: 'code', className: 'bg-[#eef4fb] text-[#5588BB] px-1.5 py-0.5 rounded text-xs font-inter border border-[#cddff3]' },
    ];

    const matches = [];
    patterns.forEach(pattern => {
      let match;
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          content: match[1],
          tag: pattern.tag,
          className: pattern.className,
        });
      }
    });

    matches.sort((a, b) => a.start - b.start);
    const validMatches = [];
    matches.forEach(match => {
      const hasOverlap = validMatches.some(existing => 
        match.start < existing.end && match.end > existing.start
      );
      if (!hasOverlap) validMatches.push(match);
    });

    let lastIndex = 0;
    const elements = [];
    validMatches.forEach((match, index) => {
      if (match.start > lastIndex) elements.push(text.slice(lastIndex, match.start));
      const Tag = match.tag;
      elements.push(<Tag key={index} className={match.className}>{match.content}</Tag>);
      lastIndex = match.end;
    });
    if (lastIndex < text.length) elements.push(text.slice(lastIndex));

    return elements.length > 0 ? elements : [text];
  };

  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, lineIndex) => {
        const isListItem = line.trim().match(/^[-*•]\s+(.+)/);
        if (isListItem) {
          return (
            <div key={lineIndex} className="flex items-start space-x-2">
              <span className="text-[#6699CC] mt-0.5">•</span>
              <span>{parseMarkdown(isListItem[1])}</span>
            </div>
          );
        }
        return <div key={lineIndex}>{parseMarkdown(line)}</div>;
      })}
    </div>
  );
}
