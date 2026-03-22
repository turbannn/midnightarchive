import spotifyLogo from './assert/spotify-logo-png.png';

function Brianna({ onBackToBook }) {
  return (
    <main className="scott-page">
      <section className="scott-hero-section">
        <div className="scott-hero-card">
          <div className="scott-hero-content">
            <p className="feature-label">Character Profile</p>
            <h1>Brianna</h1>
            <p>
              Brianna is the strategic observer of the group. She notices hidden
              details, tracks emotional shifts, and always asks the question others
              avoid.
            </p>
            <button type="button" className="primary-button" onClick={onBackToBook}>
              Back To Book Page
            </button>
          </div>
          <div className="scott-hero-media-wrap">
            <img
              className="scott-hero-media"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
              alt="Brianna portrait placeholder"
            />
          </div>
        </div>
      </section>

      <section className="scott-story-section">
        <h2 className="scott-story-title">Story</h2>
        <div className="scott-story-card">
          <p>
            Brianna grew up in a district where every family kept a private archive
            of promises and debts. She became known for decoding patterns in old
            records and connecting unrelated events into one coherent timeline.
            During the archive investigation, she is the first to realize that the
            missing pages were removed intentionally to protect someone still alive.
            Her personal conflict is learning to trust people over documents when
            the two tell different truths.
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
              Brianna Playlist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Brianna;
