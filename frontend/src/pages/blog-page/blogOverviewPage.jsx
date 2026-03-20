import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/navBar';
import { BLOG_SECTIONS } from './constants/blogText';

export default function BlogOverviewPage() {
  const blogNavItems = [
    { name: 'Home', link: '/' },
    ...BLOG_SECTIONS.map((section) => ({
      name: section.label,
      link: `/blog/${section.key}`,
    })),
  ];
  
  return (
    <div className="min-h-screen bg-[#1A202C] text-[#F8FAFC] font-jetbrains">
      <NavBar items={blogNavItems} />

      <main className="pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold text-[#F8FAFC] pb-3">Blogs</h1>
            <hr className="w-16 border-[#6699CC] border-t-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BLOG_SECTIONS.map((section) => (
              <Link
                key={section.key}
                to={`/blog/${section.key}`}
                className="group rounded-xl border border-[#6699CC]/25 bg-[#1D1F24] p-6 shadow-md hover:shadow-lg hover:border-[#6699CC] transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#6699CC] transition-colors">
                  {section.label}
                </h2>
                <p className="text-[#A0AEC0] leading-relaxed group-hover:text-[#F8FAFC] transition-colors">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
