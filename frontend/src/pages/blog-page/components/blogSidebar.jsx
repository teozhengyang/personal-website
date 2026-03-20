import { FiSidebar, FiChevronLeft, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function BlogSidebar({
  sectionLabel,
  subsections,
  selectedSubsectionId,
  selectedSubSubsectionId,
  onSelectSubsection,
  onSelectSubSubsection,
  expandedSubsections,
  onToggleSubsection,
  isSidebarOpen,
  onToggleSidebar,
}) {
  // Desktop width states: expanded vs collapsed rail
  const desktopWidthClass = isSidebarOpen ? 'lg:w-72' : 'lg:w-16';
  // Mobile slide-in state for overlay sidebar
  const mobileTranslateClass = isSidebarOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <>
      {/* Mobile floating trigger (visible only when sidebar is closed) */}
      {!isSidebarOpen && (
        <button
          type="button"
          onClick={onToggleSidebar}
          className="lg:hidden fixed top-20 left-4 z-50 inline-flex items-center justify-center rounded-lg border border-[#2D3748] bg-[#1D1F24] p-2 text-[#6699CC] hover:text-[#F8FAFC] transition-colors"
          aria-label="Open sidebar"
        >
          <FiSidebar className="w-5 h-5" />
        </button>
      )}

      {/* Mobile backdrop when sidebar is open */}
      {isSidebarOpen && (
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Close sidebar backdrop"
          className="lg:hidden fixed inset-0 top-16 z-40 bg-black/50"
        />
      )}

      {/* Sidebar container: overlay on mobile, docked rail on desktop */}
      <aside
        className={`
          fixed lg:relative top-16 lg:top-0 left-0 z-50 lg:z-20 h-[calc(100vh-4rem)] lg:h-full shrink-0
          w-72 bg-[#1D1F24] border-r border-[#2D3748] transition-all duration-300 overflow-hidden
          ${mobileTranslateClass} lg:translate-x-0
          ${desktopWidthClass}
        `}
      >
        {/* Sidebar inner wrapper */}
        <div className={`h-full ${isSidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'} transition-opacity overflow-y-auto`}>
          {isSidebarOpen ? (
            <>
              {/* Mobile sidebar top bar */}
              <div className="flex lg:hidden items-center justify-between px-3 py-3 border-b border-[#2D3748]">
                <span className="text-sm text-[#A0AEC0] font-semibold">{sectionLabel}</span>
                <button
                  type="button"
                  onClick={onToggleSidebar}
                  className="p-2 rounded-md text-[#6699CC] hover:text-[#F8FAFC] hover:bg-[#111318] transition-colors"
                  aria-label="Close sidebar"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
              </div>

              {/* Desktop sidebar top bar */}
              <div className="hidden lg:flex items-center justify-between px-2 py-2 border-b border-[#2D3748]">
                <span className="ml-2 text-sm text-[#A0AEC0] font-semibold">{sectionLabel}</span>
                <button
                  type="button"
                  onClick={onToggleSidebar}
                  className="p-2 rounded-md text-[#6699CC] hover:text-[#F8FAFC] hover:bg-[#1D1F24] transition-colors"
                  aria-label="Collapse sidebar"
                >
                  <FiChevronLeft className='w-5 h-5' />
                </button>
              </div>

              {/* Subsection + sub-subsection navigation tree */}
              <nav className="px-2 py-3 space-y-1">
                {subsections.map((subsection) => (
                  <div key={subsection.id} className="space-y-1">
                    <div
                      className={`flex items-center justify-between rounded-md transition-all duration-200 ${
                        subsection.id === selectedSubsectionId
                          ? 'bg-[#2D3748] text-[#F8FAFC]'
                          : 'text-[#A0AEC0] hover:bg-[#1D1F24]'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => onSelectSubsection(subsection.id)}
                        className="flex-1 text-left px-3 py-2 text-sm"
                      >
                        {subsection.title}
                      </button>
                      <button
                        type="button"
                        onClick={() => onToggleSubsection(subsection.id)}
                        className="px-2 py-2 text-[#6699CC] hover:text-[#F8FAFC]"
                        aria-label={`${expandedSubsections[subsection.id] ? 'Collapse' : 'Expand'} ${subsection.title}`}
                      >
                        {expandedSubsections[subsection.id] ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
                      </button>
                    </div>

                    {expandedSubsections[subsection.id] && subsection.subSubsections?.length > 0 && (
                      <div className="ml-2 pl-2 border-l border-[#2D3748] space-y-1">
                        {subsection.subSubsections.map((subSubsection) => (
                          <button
                            key={subSubsection.id}
                            type="button"
                            onClick={() => onSelectSubSubsection(subsection.id, subSubsection.id)}
                            className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-all duration-200 ${
                              subSubsection.id === selectedSubSubsectionId
                                ? 'bg-[#2D3748] text-[#F8FAFC]'
                                : 'text-[#A0AEC0] hover:text-[#F8FAFC] hover:bg-[#1D1F24]'
                            }`}
                          >
                            {subSubsection.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </>
          ) : (
            // Desktop collapsed rail with single expand button
            <div className="hidden lg:flex h-full items-start justify-center pt-3">
              <button
                type="button"
                onClick={onToggleSidebar}
                className="p-2 rounded-md text-[#6699CC] hover:text-[#F8FAFC] hover:bg-[#1D1F24] transition-colors"
                aria-label="Expand sidebar"
              >
                <FiSidebar className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
