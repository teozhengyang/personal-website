import BlogCards from './blogCards';

export default function BlogSection() {
  return (
    <div className="p-8 space-y-6 mt-10 max-w-[1500px] mx-auto scroll-mt-20 font-inter" id="blog">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-left text-[#6699CC]">Blog</h1>
      <div className="divider"></div>

      {/* Cards */}
      <BlogCards />
    </div>
  );
}
