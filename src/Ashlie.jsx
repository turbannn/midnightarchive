import spotifyLogo from './assert/spotify-logo-png.png';

function Ashlie({ onBackToBook }) {
  return (
    <main className="scott-page">
      <section className="scott-hero-section">
        <div className="scott-hero-card">
          <div className="scott-hero-content">
            <p className="feature-label">Character Profile</p>
            <h1>Ashlie</h1>
            <p>
              Ashlie is the emotional center of the team. She reads intention behind
              words and keeps fragile alliances from collapsing.
            </p>
            <button type="button" className="primary-button" onClick={onBackToBook}>
              Back To Book Page
            </button>
          </div>
          <div className="scott-hero-media-wrap">
            <img
              className="scott-hero-media"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              alt="Ashlie portrait placeholder"
            />
          </div>
        </div>
      </section>

      <section className="scott-story-section">
        <h2 className="scott-story-title">Story</h2>
        <div className="scott-story-card">
          <p>
            Ashlie began as an outsider with access to private audio diaries from
            families connected to the archive. Her ability to interpret tone, pauses,
            and contradictions helps the team identify which witnesses are afraid and
            which are lying. She discovers that the final missing document was never
            written, only spoken, and that the last recording includes her own family
            name. Her turning point is choosing transparency over protection when
            revealing that connection to the group.
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
              Ashlie Playlist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Ashlie;
