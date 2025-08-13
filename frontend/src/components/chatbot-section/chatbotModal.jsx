import { HiSparkles, HiXMark, HiArrowRight } from 'react-icons/hi2';
import useChatbot from '../../hooks/useChatbot';
import { uiText } from '../../constants/chatbotSection';

// Simple markdown parser component
function MarkdownText({ text }) {
  const parseMarkdown = (text) => {
    // Regular expressions for different markdown patterns
    const patterns = [
      { regex: /\*\*(.*?)\*\*/g, tag: 'strong', className: 'font-bold' },
      { regex: /(?<!\*)\*([^*]+)\*(?!\*)/g, tag: 'em', className: 'italic' },
      { regex: /`(.*?)`/g, tag: 'code', className: 'bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono border' },
    ];
    
    // Find all matches
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
    
    // Sort matches by start position and remove overlapping matches
    matches.sort((a, b) => a.start - b.start);
    const validMatches = [];
    matches.forEach(match => {
      const hasOverlap = validMatches.some(existing => 
        (match.start < existing.end && match.end > existing.start)
      );
      if (!hasOverlap) {
        validMatches.push(match);
      }
    });
    
    // Build the parsed content
    let lastIndex = 0;
    const elements = [];
    
    validMatches.forEach((match, index) => {
      // Add text before the match
      if (match.start > lastIndex) {
        elements.push(text.slice(lastIndex, match.start));
      }
      
      // Add the formatted element
      const Tag = match.tag;
      elements.push(
        <Tag key={index} className={match.className}>
          {match.content}
        </Tag>
      );
      
      lastIndex = match.end;
    });
    
    // Add remaining text
    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }
    
    return elements.length > 0 ? elements : [text];
  };

  // Split by line breaks and handle each line
  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, lineIndex) => {
        // Check if line is a list item
        const isListItem = line.trim().match(/^[-*•]\s+(.+)/);
        if (isListItem) {
          return (
            <div key={lineIndex} className="flex items-start space-x-2">
              <span className="text-[#6699CC] font-bold mt-0.5">•</span>
              <span>{parseMarkdown(isListItem[1])}</span>
            </div>
          );
        }
        
        // Regular line
        return (
          <div key={lineIndex}>
            {parseMarkdown(line)}
          </div>
        );
      })}
    </div>
  );
}

export default function ChatbotModal({ isOpen, onClose }) {
  const {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    messagesEndRef,
    handleSendMessage,
    handleKeyPress
  } = useChatbot(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 w-80 max-w-[calc(100vw-2rem)] h-96 max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-500 backdrop-blur-sm md:bottom-24 md:right-6 md:w-80">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#6699CC] to-[#5588BB] text-white p-3 md:p-4 flex items-center justify-between relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-2 right-8 w-8 h-8 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-3 relative z-10">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <HiSparkles className="h-4 w-4 md:h-5 md:w-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm md:text-base">{uiText.assistantName}</h3>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-xs opacity-90 font-medium">{uiText.onlineStatus}</p>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10 relative z-10"
        >
          <HiXMark className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gradient-to-b from-gray-50 to-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
          >
            <div
              className={`max-w-[75%] md:max-w-xs p-2.5 md:p-3 rounded-2xl text-xs md:text-sm font-medium shadow-sm ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-[#6699CC] to-[#5588BB] text-white rounded-br-md shadow-lg'
                  : 'bg-white text-gray-800 rounded-bl-md border border-gray-100 shadow-md'
              }`}
            >
              {message.sender === 'user' ? (
                message.text
              ) : (
                <MarkdownText text={message.text} />
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
            <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-md border border-gray-100 p-3 md:p-4 max-w-[75%] md:max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#6699CC] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#6699CC] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-[#6699CC] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-100">
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={uiText.inputPlaceholder}
            className="flex-1 px-3 md:px-4 py-3 md:py-4 border-0 focus:outline-none focus:ring-0 text-xs md:text-sm bg-transparent placeholder-gray-500 text-gray-800 font-medium"
          />
          <button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ''}
            className="px-4 md:px-5 py-3 md:py-4 bg-gradient-to-r from-[#6699CC] to-[#5588BB] text-white hover:from-[#5588BB] hover:to-[#4477AA] disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center border-0"
          >
            <HiArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
