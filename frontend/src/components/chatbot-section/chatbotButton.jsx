import { HiOutlineChatBubbleLeftRight, HiXMark } from 'react-icons/hi2';

export default function ChatbotButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-4 right-4 z-50 w-16 h-16
        rounded-full bg-[#1D1F24] border border-[#6699CC]/40
        text-[#6699CC] shadow-lg
        transition-all duration-200 ease-in-out
        flex items-center justify-center group
        hover:border-[#6699CC]/80 hover:text-[#F8FAFC]
      `}
    >
      {isOpen ? (
        <HiXMark className="h-6 w-6 md:h-6 md:w-6 transition-transform duration-300 group-hover:scale-110" />
      ) : (
        <HiOutlineChatBubbleLeftRight className="h-6 w-6 md:h-6 md:w-6 transition-transform duration-300 group-hover:scale-110" />
      )}
    </button>
  );
}
