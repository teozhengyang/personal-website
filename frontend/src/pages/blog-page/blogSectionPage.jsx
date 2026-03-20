import { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import NavBar from '../../components/navbar-section/navBar';
import BlogSidebar from './components/blogSidebar';
import { BLOG_SECTIONS, BLOG_SUBSECTIONS } from './assets/blogText';

export default function BlogSectionPage() {
  // Current blog section from URL: /blog/:section
  const { section } = useParams();

  // Active top-level section metadata
  const activeSection = useMemo(
    () => BLOG_SECTIONS.find((item) => item.key === section),
    [section],
  );

  // Subsections for the active top-level section
  const subsections = useMemo(
    () => (activeSection ? BLOG_SUBSECTIONS[activeSection.key] : []),
    [activeSection],
  );

  // Sidebar and content selection states
  const [selectedSubsectionId, setSelectedSubsectionId] = useState(subsections[0].id);
  const [selectedSubSubsectionId, setSelectedSubSubsectionId] = useState(
    subsections[0].subSubsections[0].id,
  );
  const [expandedSubsections, setExpandedSubsections] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Reset selection when user changes top-level section
  useEffect(() => {
    const firstSubsectionId = subsections[0].id;
    const firstSubSubsectionId = subsections[0].subSubsections[0].id;

    setSelectedSubsectionId(firstSubsectionId);
    setSelectedSubSubsectionId(firstSubSubsectionId);
    setExpandedSubsections(
      firstSubsectionId
        ? {
            [firstSubsectionId]: true,
          }
        : {},
    );
  }, [subsections]);

  // Responsive sidebar state: closed by default on mobile, open on desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    const updateSidebarState = (event) => {
      setIsSidebarOpen(!event.matches);
    };

    updateSidebarState(mediaQuery);
    mediaQuery.addEventListener('change', updateSidebarState);

    return () => mediaQuery.removeEventListener('change', updateSidebarState);
  }, []);

  if (!activeSection) {
    return <Navigate to="/blog" replace />;
  }

  // Current active subsection and sub-subsection for content rendering
  const activeSubsection =
    subsections.find((item) => item.id === selectedSubsectionId) ?? subsections[0];
  const activeSubSubsection =
    activeSubsection.subSubsections.find((item) => item.id === selectedSubSubsectionId) ??
    activeSubsection.subSubsections[0];
  const contentTitle = activeSubSubsection.title;
  const contentBody = activeSubSubsection.body;
  
  // Top navigation items for blog routes
  const blogNavItems = [
    { name: 'Home', link: '/' },
    ...BLOG_SECTIONS.map((section) => ({
      name: section.label,
      link: `/blog/${section.key}`,
    })),
  ];

  return (
    // Full-screen page shell
    <div className="h-screen bg-[#1A202C] text-[#F8FAFC] font-jetbrains overflow-hidden">
      <NavBar items={blogNavItems} />

      {/* Content area below fixed navbar */}
      <main className="mt-16 h-[calc(100vh-4rem)]">
        <div className="relative flex h-full w-full gap-0">
          {/* Sidebar navigation with nested collapsible groups */}
          <BlogSidebar
            sectionLabel={activeSection.label}
            subsections={subsections}
            selectedSubsectionId={activeSubsection.id}
            selectedSubSubsectionId={activeSubSubsection.id}
            onSelectSubsection={(id) => {
              const selectedSubsection = subsections.find((item) => item.id === id);
              setSelectedSubsectionId(id);
              setSelectedSubSubsectionId(selectedSubsection.subSubsections[0].id);
              setExpandedSubsections((prev) => ({
                ...prev,
                [id]: true,
              }));
              if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
              }
            }}
            onSelectSubSubsection={(subsectionId, subSubsectionId) => {
              setSelectedSubsectionId(subsectionId);
              setSelectedSubSubsectionId(subSubsectionId);
              setExpandedSubsections((prev) => ({
                ...prev,
                [subsectionId]: true,
              }));
              if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
              }
            }}
            expandedSubsections={expandedSubsections}
            onToggleSubsection={(subsectionId) => {
              setExpandedSubsections((prev) => ({
                ...prev,
                [subsectionId]: !prev[subsectionId],
              }));
            }}
            isSidebarOpen={isSidebarOpen}
            onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          />

          {/* Main article/content panel */}
          <section
            className={`flex-1 h-full bg-[#1A202C] overflow-y-auto p-6 sm:p-8 lg:p-10 ${
              !isSidebarOpen ? 'pl-20 sm:pl-8 lg:pl-10' : ''
            }`}
          >
            <div className="space-y-4 max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                {contentTitle}
              </h2>
              <p className="text-[#A0AEC0] leading-relaxed">
                {contentBody}
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
