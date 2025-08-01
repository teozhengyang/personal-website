import { blog_dict } from '../../constants/blogSection';

export default function BlogCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-[#4A5568] dark:text-[#A0AEC0]">
      {blog_dict.map((post, idx) => (
        <div
          key={idx}
          className="card bg-base-200 hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden"
        >
          <div className="card-body space-y-3">
            <h2 className="card-title font-semibold text-lg">{post.title}</h2>
            <p className="text-sm leading-relaxed">{post.description}</p>
            <div className="card-actions justify-end">
              {post.source && (
                <a
                  href={post.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-sm text-[#4A5568] dark:text-[#A0AEC0] border-[#4A5568] hover:bg-[#4A5568] hover:text-white transition-colors duration-200">
                    Website
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
