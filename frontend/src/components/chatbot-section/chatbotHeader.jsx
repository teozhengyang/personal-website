import { HiSparkles, HiXMark } from 'react-icons/hi2';
import myimage from './assets/ai.jpg';

export default function ChatbotHeader({ onClose }) {
  return (
    <div className="bg-[#1D1F24] border-b border-[#6699CC]/40 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">

        {/* Logo */}
          <img src={myimage} alt="AI Logo" className="h-8 rounded-full" />
        <div>
          {/* Chatbot name */}
          <h3 className="font-bold text-sm text-[#F8FAFC]">Zheng Yang</h3>
          {/* Chatbot status */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-xs text-[#A0AEC0] font-medium">Online</p>
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
