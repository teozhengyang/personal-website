import MarkdownText from "./markdownText";

export default function ChatbotMessages({ messages, isTyping, messagesEndRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-[#16181D]">
      {/* Messages */}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
        >
          <div
            className={`max-w-[75%] md:max-w-xs p-2.5 md:p-3 rounded-xl text-xs md:text-sm ${
              message.sender === 'user'
                ? 'bg-[#6699CC] text-white rounded-br-sm'
                : 'bg-[#1D1F24] text-[#A0AEC0] rounded-bl-sm border border-[#6699CC]/20'
            }`}
          >
            {message.sender === 'user' ? message.text : <MarkdownText text={message.text} />}
          </div>
        </div>
      ))}

      {/* Animation while waiting for response */}
      {isTyping && (
        <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
          <div className="bg-[#1D1F24] border border-[#6699CC]/20 rounded-xl rounded-bl-sm p-3 md:p-4 max-w-[75%] md:max-w-xs">
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
  );
}
