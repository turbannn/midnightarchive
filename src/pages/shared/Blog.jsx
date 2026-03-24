const blogCards = [
  {
    title: 'Blog Post 01',
    description: 'Sample description text for a vertical blog card preview.'
  },
  {
    title: 'Blog Post 02',
    description: 'Another placeholder post description for the blog timeline.'
  },
  {
    title: 'Blog Post 03',
    description: 'Static content block with title and brief summary content.'
  },
  {
    title: 'Blog Post 04',
    description: 'Example post card that users can scroll to read in sequence.'
  },
  {
    title: 'Blog Post 05',
    description: 'Dummy text card used for layout and spacing demonstration.'
  },
  {
    title: 'Blog Post 06',
    description: 'Additional sample post item displayed in vertical order.'
  }
];

function Blog() {
  return (
    <main className="blog-page">
      <section className="blog-section">
        <h1>Blog</h1>
        <div className="blog-list">
          {blogCards.map((post) => (
            <article className="blog-card" key={post.title}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blog;
