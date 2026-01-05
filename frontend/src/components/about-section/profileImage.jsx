import mypicture from '../../assets/about-section/mypicture1.JPG';

export default function ProfileImage() {
  return (
    <div className="flex justify-center" data-aos="zoom-in">
      <div className="w-72 h-72 rounded-full border-4 border-[#6699CC] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <img
          src={mypicture}
          alt="Zheng Yang"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
