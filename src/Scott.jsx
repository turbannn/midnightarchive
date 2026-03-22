import spotifyLogo from './assert/spotify-logo-png.png';

function Scott({ onBackToBook }) {
  return (
    <main className="scott-page">
      <section className="scott-hero-section">
        <div className="scott-hero-card">
          <div className="scott-hero-content">
            <p className="feature-label">Character Profile</p>
            <h1>Scott</h1>
            <p>
              Placeholder character description. Replace this content with the
              final biography, key plot role, and emotional arc details.
            </p>
            <button type="button" className="primary-button" onClick={onBackToBook}>
              Back To Book Page
            </button>
          </div>
          <div className="scott-hero-media-wrap">
            <img
              className="scott-hero-media"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
              alt="Scott portrait placeholder"
            />
          </div>
        </div>
      </section>

      <section className="scott-story-section">
        <h2 className="scott-story-title">Story</h2>
        <div className="scott-story-card">
          <p>
            Scott grew up between cold ports and railway lights, always carrying a
            notebook with unfinished maps and names. When the city archives were
            closed after a sudden fire, he started collecting fragments from private
            letters, cassette recordings, and forgotten station journals. Piece by
            piece, he discovered that one missing route connected every tragedy in
            his family line. His journey became less about solving a mystery and
            more about deciding what truth is worth preserving when memory can hurt
            as much as silence.
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
              Scott`s Playlist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Scott;
