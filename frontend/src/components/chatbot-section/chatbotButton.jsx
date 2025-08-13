import { HiOutlineChatBubbleLeftRight, HiXMark } from 'react-icons/hi2';

export default function ChatbotButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-4 right-4 z-50 w-14 h-14 md:w-16 md:h-16 md:bottom-6 md:right-6
        rounded-full bg-gradient-to-r from-[#6699CC] to-[#5588BB]
        text-white shadow-lg hover:shadow-2xl
        transition-transform duration-300 ease-in-out
        flex items-center justify-center group border-2 border-white/20
        ${isOpen ? 'scale-95 rotate-90' : 'scale-100 hover:scale-110'}
      `}
    >
      {isOpen ? (
        <HiXMark className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300" />
      ) : (
        <HiOutlineChatBubbleLeftRight className="h-6 w-6 md:h-7 md:w-7 transition-transform duration-300 group-hover:scale-110" />
      )}
    </button>
  );
}
