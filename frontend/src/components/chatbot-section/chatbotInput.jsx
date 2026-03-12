import { HiArrowRight } from 'react-icons/hi2';

export default function ChatbotInput({ inputValue, setInputValue, handleSendMessage, handleKeyPress }) {
  return (
    <div className="bg-[#1D1F24] border-t border-[#6699CC]/25">
      <div className="flex items-center">
        {/* Input message area */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="
            flex-1 px-3 md:px-4 py-3 md:py-3.5 border-0 focus:outline-none focus:ring-0 text-xs md:text-sm
            bg-transparent placeholder-[#4A5568] text-[#F8FAFC] font-medium"
        />

        {/* Send message button */}
        <button
          onClick={handleSendMessage}
          disabled={inputValue.trim() === ''}
          className="
            px-4 md:px-5 py-3 md:py-3.5 bg-[#6699CC] text-white
            hover:bg-[#5588BB] disabled:bg-[#6699CC]/25 disabled:cursor-not-allowed
            transition-colors duration-150 flex items-center justify-center border-0"
        >
          <HiArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
        </button>
      </div>
    </div>
  );
}
