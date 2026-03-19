import { Navigate, useParams } from 'react-router-dom';
import { getFirstSubsectionSlug, getSubsectionTitleFromSlug } from '../constants/blogSection';

export default function BlogPage({ sectionKey }) {
  const { subsectionSlug } = useParams();
  const subsectionTitle = getSubsectionTitleFromSlug(sectionKey, subsectionSlug);

  if (!subsectionTitle) {
    return <Navigate to={`/blog/${sectionKey}/${getFirstSubsectionSlug(sectionKey)}`} replace />;
  }

  return (
    <div className="font-jetbrains px-6 py-8 md:px-10 md:py-10 space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold text-[#F8FAFC]">{subsectionTitle}</h1>
        <hr className="w-16 border-[#6699CC] border-t-2" />
      </div>

      <div className="min-h-[60vh] rounded-lg border border-dashed border-[#2A2D35] bg-[#1D1F24]/40 p-4 text-[#6699CC]">
        Content for {subsectionTitle}
      </div>
    </div>
  );
}
