import spotifyLogo from '../../../assert/spotify-logo-png.png';

function Tommy({ onBackToBook }) {
  return (
    <main className="scott-page">
      <section className="scott-hero-section">
        <div className="scott-hero-card">
          <div className="scott-hero-content">
            <p className="feature-label">Character Profile</p>
            <h1>Tommy</h1>
            <p>
              Tommy is the restless field runner. He moves fast, improvises under
              pressure, and turns risky moments into narrow escapes.
            </p>
            <button type="button" className="primary-button" onClick={onBackToBook}>
              Back To Book Page
            </button>
          </div>
          <div className="scott-hero-media-wrap">
            <img
              className="scott-hero-media"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80"
              alt="Tommy portrait placeholder"
            />
          </div>
        </div>
      </section>

      <section className="scott-story-section">
        <h2 className="scott-story-title">Story</h2>
        <div className="scott-story-card">
          <p>
            Tommy learned to navigate abandoned transit lines long before he joined
            the archive search. His memory of side routes and hidden platforms saves
            the team more than once, especially when official maps become useless.
            Under his impulsive confidence is a fear of standing still, because still
            moments remind him of the night he failed to return in time for someone
            he loved. His arc centers on facing that guilt instead of outrunning it.
          </p>
        </div>
      </section>

      <section className="spotify-section scott-spotify-section">
        <div className="spotify-card">
          <div className="spotify-logo-wrap" aria-hidden="true">
            <img className="spotify-logo" src={spotifyLogo} alt="Spotify logo" />
          </div>
          <div className="spotify-links-wrap">
            <a
              className="spotify-link"
              href="https://open.spotify.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tommy Playlist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tommy;
