import { useEffect, useState } from 'react';

export default function Footer() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
      .then((res) => res.json())
      .then((data) => setFact(data.text))
      .catch((err) => console.error('Failed to fetch useless fact:', err));
  }, []);

  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-6">
          {/* Email */}
          <a href="mailto:teozhengyang01@gmail.com" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M1.5 4.5A2.25 2.25 0 0 1 3.75 2.25h16.5a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 19.5v-15Zm2.25-.75a.75.75 0 0 0-.75.75v.638l9 5.625 9-5.625V4.5a.75.75 0 0 0-.75-.75H3.75ZM21 6.75l-8.505 5.313a.75.75 0 0 1-.99 0L3 6.75V19.5a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75V6.75Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/teozhengyang" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5v13H0v-13zM7.5 8.5h4.7v1.8h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.2 3.4 6.2 7.8v9h-5v-8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.2h-5v-13z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/teozhengyang" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.63-4.04-1.63-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.82 2.81 1.29 3.5.98.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.52 11.52 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.85 1.23 1.93 1.23 3.25 0 4.62-2.81 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.83.58A12 12 0 0 0 12 .5z" />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        {fact}
      </aside>
    </footer>
  );
}
