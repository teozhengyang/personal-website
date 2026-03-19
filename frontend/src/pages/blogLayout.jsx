import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/navbar-section/navBar';
import { blogSections, getSubsectionSlug } from '../constants/blogSection';

const blogMenuItems = [
  { label: 'Home', type: 'route', target: '/' },
  { label: 'Sports', type: 'route', target: '/blog/sports' },
  { label: 'Photography', type: 'route', target: '/blog/photography' },
  { label: 'Travelling', type: 'route', target: '/blog/travelling' },
  { label: 'History', type: 'route', target: '/blog/history' },
];

export default function BlogLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const sectionKey = pathParts[2] && blogSections[pathParts[2]] ? pathParts[2] : 'sports';
  const activeSection = blogSections[sectionKey];
  const subsections = activeSection.subsections;

  return (
    <div className="min-h-screen bg-[#1A202C] text-[#F8FAFC]">
      <NavBar menuItems={blogMenuItems} />

      <div className="pt-20 pb-8">
        <div className="flex">
          <aside
            className={`sticky top-20 self-start h-[calc(100vh-6rem)] z-30 bg-[#1D1F24] border-r border-[#2A2D35] transition-all duration-300 ${
              isSidebarOpen ? 'w-64' : 'w-16'
            }`}
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between px-3 py-4 border-b border-[#2A2D35]">
                {isSidebarOpen && <h2 className="text-base font-bold text-[#F8FAFC]">{activeSection.title}</h2>}
                <button
                  type="button"
                  aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                  onClick={() => setIsSidebarOpen((prev) => !prev)}
                  className="h-9 w-9 rounded-md border border-[#2A2D35] text-[#6699CC] hover:text-[#F8FAFC] transition-all duration-200"
                >
                  {isSidebarOpen ? '←' : '→'}
                </button>
              </div>

              {isSidebarOpen ? (
                <div className="px-3 pt-3 pb-4">
                  <ul className="space-y-2">
                    {subsections.map((subsection) => (
                      <li key={subsection}>
                        <NavLink
                          to={`/blog/${sectionKey}/${getSubsectionSlug(subsection)}`}
                          className={({ isActive }) =>
                            `block text-sm py-2 px-3 rounded-md border transition-all duration-200 ${
                              isActive
                                ? 'text-[#F8FAFC] border-[#6699CC] bg-[#2A2D35]'
                                : 'text-[#6699CC] border-[#2A2D35] hover:text-[#F8FAFC] hover:border-[#6699CC]'
                            }`
                          }
                        >
                          {subsection}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="px-2 py-3 space-y-2">
                  {subsections.map((subsection) => (
                    <div
                      key={subsection}
                      className="h-8 rounded-md border border-[#2A2D35] bg-[#2A2D35]/40"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              )}
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
