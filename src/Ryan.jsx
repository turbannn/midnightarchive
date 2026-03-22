import spotifyLogo from './assert/spotify-logo-png.png';

function Ryan({ onBackToBook }) {
  return (
    <main className="scott-page">
      <section className="scott-hero-section">
        <div className="scott-hero-card">
          <div className="scott-hero-content">
            <p className="feature-label">Character Profile</p>
            <h1>Ryan</h1>
            <p>
              Ryan is the quiet analyst. He transforms scattered clues into clean
              structures and keeps the group grounded when decisions become chaotic.
            </p>
            <button type="button" className="primary-button" onClick={onBackToBook}>
              Back To Book Page
            </button>
          </div>
          <div className="scott-hero-media-wrap">
            <img
              className="scott-hero-media"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Ryan portrait placeholder"
            />
          </div>
        </div>
      </section>

      <section className="scott-story-section">
        <h2 className="scott-story-title">Story</h2>
        <div className="scott-story-card">
          <p>
            Ryan spent years cataloging weather records and municipal failures, a
            habit that looked obsessive until the archive case proved him right.
            He uncovers a repeated sequence of outages that matches every major
            disappearance in the timeline. While others chase dramatic leads, Ryan
            follows the boring details and finds the real mechanism behind the cover
            up. His challenge is stepping forward as a leader when the group expects
            him to remain in the background.
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
              Ryan Playlist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Ryan;
