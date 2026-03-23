const samplePosts = [
  {
    title: 'Post Title 01',
    description: 'Placeholder post description for profile feed preview.'
  },
  {
    title: 'Post Title 02',
    description: 'Another static post card with short summary text.'
  },
  {
    title: 'Post Title 03',
    description: 'Non-clickable post container with title and description.'
  },
  {
    title: 'Post Title 04',
    description: 'Sample profile post card for UI layout testing.'
  }
];

function Profile({ user, onOpenLogin, onLogout }) {
  const isAuthenticated = Boolean(user);
  const nickname = isAuthenticated ? user.nickname : 'Guest';
  const tags = isAuthenticated ? user.tags : ['Visitor', 'Read only'];

  return (
    <main className="profile-page">
      <section className="profile-section">
        <div className="profile-hero-card">
          <div className="profile-user-meta">
            {isAuthenticated ? (
              <img className="profile-avatar" src={user.avatar} alt={`${nickname} avatar`} />
            ) : (
              <div className="profile-avatar guest-avatar" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4.2" />
                  <path d="M4 21c.6-4.4 3.6-6.8 8-6.8s7.4 2.4 8 6.8" />
                </svg>
              </div>
            )}

            <div className="profile-user-text">
              <h1>{nickname}</h1>
              <div className="profile-tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={isAuthenticated ? onLogout : onOpenLogin}
          >
            {isAuthenticated ? 'Log out' : 'Log in'}
          </button>
        </div>

        <div className="profile-posts-card">
          <h2>User Posts</h2>
          <div className="profile-post-list">
            {samplePosts.map((post) => (
              <article className="profile-post" key={post.title}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
