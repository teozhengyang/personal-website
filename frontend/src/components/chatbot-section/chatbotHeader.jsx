import { HiSparkles, HiXMark } from 'react-icons/hi2';
import { uiText } from '../../constants/chatbotSection';

export default function ChatbotHeader({ onClose }) {
  return (
    <div className="bg-[#1D1F24] border-b border-[#6699CC]/25 p-3 md:p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2 md:space-x-3">

        {/* Logo */}
        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#6699CC]/15 rounded-full flex items-center justify-center border border-[#6699CC]/30">
          <HiSparkles className="h-4 w-4 md:h-5 md:w-5 text-[#6699CC]" />
        </div>
        <div>
          {/* Chatbot name */}
          <h3 className="font-bold text-sm md:text-base text-[#F8FAFC]">{uiText.assistantName}</h3>
          {/* Chatbot status */}
          <div className="flex items-center space-x-1.5">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-xs text-[#A0AEC0] font-medium">{uiText.onlineStatus}</p>
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="text-[#A0AEC0] hover:text-[#F8FAFC] transition-colors p-1 rounded-full hover:bg-[#6699CC]/10"
      >
        <HiXMark className="h-5 w-5" />
      </button>
    </div>
  );
}
