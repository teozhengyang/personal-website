import { MdSportsSoccer, MdSportsBasketball, MdSportsMotorsports, MdTravelExplore, MdMusicNote, MdCameraAlt, MdMenuBook } from 'react-icons/md';

const interests = [
  { icon: <MdSportsSoccer />, label: 'Football' },
  { icon: <MdSportsBasketball />, label: 'Basketball' },
  { icon: <MdSportsMotorsports />, label: 'F1' },
  { icon: <MdTravelExplore />, label: 'Travel' },
  { icon: <MdMusicNote />, label: 'Music Festivals' },
  { icon: <MdCameraAlt />, label: 'Photography' },
  { icon: <MdMenuBook />, label: 'History' },
];

export default function AboutText() {
  return (
    <div className="space-y-7" data-aos="fade-right">
      {/* Name */}
      <div>
        <h2 className="text-2xl font-bold text-[#F8FAFC]">
          Hi, I'm Zheng Yang!
        </h2>
      </div>

      {/* Bio */}
      <div className="border-l-2 border-[#6699CC]/40 pl-4 space-y-3">
        <p className="text-[#F8FAFC] leading-relaxed">
          Computer Science undergraduate at National University of Singapore,
          specialising in database systems and artificial intelligence.
        </p>
      </div>

      {/* Interests */}
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-[#6699CC] mb-3">Interests</p>
        <div className="flex flex-wrap gap-4">
          {interests.map(({ icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-4 px-3 py-3 rounded-full text-sm font-medium border border-[#6699CC]/30 text-[#F8FAFC]"
            >
              <span className="text-[#6699CC] text-base">{icon}</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
