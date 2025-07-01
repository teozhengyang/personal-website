const blog_dict = [
  {
    title: "Work in Progress",
    description: "Check out my profile for more updates!",
    source: "https://medium.com/@teozhengyang",
  },
];

export default function blog() {
  return (
    <div className="p-8 space-y-3 max-w-[1500px] mx-auto" id="blog">
      {/* Header */}
      <h1 className="text-3xl font-bold text-left">Blog</h1>
      <div className="divider"></div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blog_dict.map((post, idx) => (
          <div key={idx} className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <div className="card-actions justify-end">
                {post.source && (
                  <a href={post.source} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-soft btn-sm">Profile</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}