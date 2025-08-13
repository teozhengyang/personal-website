import { HiSparkles, HiXMark } from 'react-icons/hi2';
import { uiText } from '../../constants/chatbotSection';

export default function ChatbotHeader({ onClose }) {
  return (
    <div className="bg-gradient-to-r from-[#6699CC] to-[#5588BB] text-white p-3 md:p-4 flex items-center justify-between relative overflow-hidden">
      <div className="flex items-center space-x-2 md:space-x-3 relative z-10">
        
        {/* Logo */}
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
          <HiSparkles className="h-4 w-4 md:h-5 md:w-5" />
        </div>
        <div>
          {/* Chatbot name */}
          <h3 className="font-bold text-sm md:text-base">{uiText.assistantName}</h3>
          {/* Chatbot status */}
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-xs opacity-90 font-medium">{uiText.onlineStatus}</p>
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10 relative z-10"
      >
        <HiXMark className="h-5 w-5" />
      </button>
    </div>
  );
}
