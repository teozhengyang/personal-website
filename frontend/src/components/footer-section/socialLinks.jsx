import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
  const iconClass = "h-10 w-10 text-[#4A5568]";
  const linkClass = "md:hover:bg-[#6699CC]/10 p-3 rounded-full transition";

  return (
    <nav className="mb-4">
      <div className="grid grid-flow-col gap-6">
        {/* Email */}
        <a href="mailto:teozhengyang01@gmail.com" aria-label="Email" className={linkClass}>
          <HiMail className={iconClass} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/teozhengyang"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={linkClass}
        >
          <FaLinkedin className={iconClass} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/teozhengyang"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={linkClass}
        >
          <FaGithub className={iconClass} />
        </a>
      </div>
    </nav>
  );
}
