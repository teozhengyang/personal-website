import MarkdownText from "./markdownText";

export default function ChatbotMessages({ messages, isTyping, messagesEndRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gradient-to-b from-gray-50 to-white">
      {/* Messages */}
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
            {message.sender === 'user' ? message.text : <MarkdownText text={message.text} />}
          </div>
        </div>
      ))}

      {/* Animation while waiting for response */}
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
  );
}
