export const blogSections = {
  sports: {
    title: 'Sports',
    subsections: ['Subsection 1', 'Subsection 2', 'Subsection 3'],
  },
  photography: {
    title: 'Photography',
    subsections: ['Subsection 1', 'Subsection 2', 'Subsection 3'],
  },
  travelling: {
    title: 'Travelling',
    subsections: ['Subsection 1', 'Subsection 2', 'Subsection 3'],
  },
  history: {
    title: 'History',
    subsections: ['Subsection 1', 'Subsection 2', 'Subsection 3'],
  },
};

export const getSubsectionSlug = (subsection) =>
  subsection.toLowerCase().replace(/\s+/g, '-');

export const getSubsectionTitleFromSlug = (sectionKey, subsectionSlug) => {
  const section = blogSections[sectionKey];
  if (!section) return null;

  return section.subsections.find((subsection) => getSubsectionSlug(subsection) === subsectionSlug) || null;
};

export const getFirstSubsectionSlug = (sectionKey) => {
  const section = blogSections[sectionKey];
  if (!section?.subsections?.length) return null;

  return getSubsectionSlug(section.subsections[0]);
};
