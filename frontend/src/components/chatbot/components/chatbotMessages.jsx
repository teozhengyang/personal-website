import MarkdownText from "./markdownText";
import myimage from '../assets/ai.jpg';

export default function ChatbotMessages({ messages, isTyping, messagesEndRef }) {
  return (
    <div className="flex-1 overflow-y-auto px-5 pt-5 pb-3 space-y-4 bg-[#16181D]">
      {/* Messages */}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
        >
          {message.sender === 'bot' && (
            <img
              src={myimage}
              alt="Zheng Yang"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#6699CC]/40 mb-1"
            />
          )}

          <div
            className={`max-w-[80%] md:max-w-[18rem] p-3 rounded-2xl text-sm ${
              message.sender === 'user'
                ? 'bg-[#6699CC] text-[#] rounded-br-md'
                : 'bg-[#1D1F24] text-[#A0AEC0] rounded-bl-md border border-[#6699CC]/20'
            }`}
          >
            {message.sender === 'user' ? message.text : <MarkdownText text={message.text} />}
          </div>

          {message.sender === 'user' && (
            <div className="w-8 h-8 rounded-full bg-[#1D1F24] border border-[#6699CC]/35 text-[#6699CC] text-xs font-semibold flex items-center justify-center mb-1">
              You
            </div>
          )}
        </div>
      ))}

      {/* Animation while waiting for response */}
      {isTyping && (
        <div className="flex items-end gap-2 justify-start animate-in slide-in-from-bottom-2 duration-300">
          <img
            src={myimage}
            alt="Zheng Yang"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-[#6699CC]/40 mb-1"
          />
          <div className="bg-[#1D1F24] border border-[#6699CC]/20 rounded-2xl rounded-bl-md p-4 max-w-[75%]">
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
