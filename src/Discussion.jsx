const discussionPosts = [
  {
    topic: 'Should we trust the final chapter narrator?',
    type: 'питання',
    book: 'Camp Blackwood',
    text: 'I noticed several contradictions in the timeline around the lake scene. Am I missing any clear clue?'
  },
  {
    topic: 'Best character arc in the book',
    type: 'обговорення',
    book: 'Camp Blackwood',
    text: 'For me, Brianna has the strongest arc from detached observer to active decision maker.'
  },
  {
    topic: 'Meaning of the archive symbol',
    type: 'питання',
    book: 'Camp Blackwood',
    text: 'The recurring mark in chapter notes appears in three locations. Does it reference a real map layer?'
  },
  {
    topic: 'Which chapter changed your perspective most',
    type: 'обговорення',
    book: 'Camp Blackwood',
    text: 'Chapter 9 reframed everything for me because of how memory and truth were contrasted.'
  }
];

function Discussion({ onOpenCreatePost }) {
  return (
    <main className="blog-page">
      <section className="discussion-section">
        <div className="discussion-header">
          <h1>Discussion</h1>
          <button type="button" className="primary-button" onClick={onOpenCreatePost}>
            Make A Post
          </button>
        </div>

        <div className="discussion-list">
          {discussionPosts.map((post) => (
            <article className="discussion-card" key={post.topic}>
              <h2>{post.topic}</h2>
              <div className="discussion-tags">
                <span
                  className={`discussion-tag ${
                    post.type === 'питання' ? 'discussion-tag-question' : 'discussion-tag-discussion'
                  }`}
                >
                  {post.type}
                </span>
                <span className="discussion-tag discussion-tag-book">{post.book}</span>
              </div>
              <p>{post.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Discussion;
