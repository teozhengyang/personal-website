import { HiArrowRight } from 'react-icons/hi2';

export default function ChatbotInput({ inputValue, setInputValue, handleSendMessage, handleKeyPress }) {
  return (
    <div className="bg-white border-t border-gray-100">
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
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
  );
}
