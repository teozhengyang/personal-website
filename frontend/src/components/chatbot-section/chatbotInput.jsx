import { HiArrowRight } from 'react-icons/hi2';

export default function ChatbotInput({ inputValue, setInputValue, handleSendMessage, handleKeyPress }) {
  return (
    <div className="bg-[#1D1F24] border-t border-[#6699CC]/25">
      <div className="flex items-stretch w-full">
        {/* Input message area */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Message Zheng Yang..."
          className="
            flex-1 px-4 py-4 border-0 focus:outline-none focus:ring-0 text-xs md:text-sm
            bg-transparent placeholder-[#A0AEC0] text-[#F8FAFC]"
        />

        {/* Send message button */}
        <button
          onClick={handleSendMessage}
          disabled={inputValue.trim() === ''}
          className="
            px-5 py-3 bg-[#6699CC] text-white
            hover:bg-[#5588BB] disabled:bg-[#6699CC]/25 disabled:cursor-not-allowed
            transition-colors duration-150 flex items-center justify-center border-0"
        >
          <HiArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
        </button>
      </div>
    </div>
  );
}
