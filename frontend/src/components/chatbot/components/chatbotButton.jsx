import { HiXMark } from 'react-icons/hi2';
import myimage from '../assets/ai.jpg';

export default function ChatbotButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-4 right-4 z-50 w-16 h-16 md:w-[4.25rem] md:h-[4.25rem]
        rounded-full bg-[#1D1F24] border border-[#6699CC]/40 
        text-[#6699CC] flex items-center justify-center
        hover:border-[#6699CC]/80 hover:text-[#F8FAFC] hover:scale-[1.03]
      `}
    >
      {isOpen ? (
        <HiXMark className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      ) : (
        <img
          src={myimage}
          alt="Open chat"
          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110-"
        />
      )}
    </button>
  );
}
