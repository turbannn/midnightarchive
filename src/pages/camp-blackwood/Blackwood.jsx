import spotifyLogo from '../../assert/spotify-logo-png.png';

const characterCards = [
  {
    name: 'Scott',
    description: 'Text filler',
    image: 'https://picsum.photos/seed/char01/160/130',
    page: 'scott'
  },
  {
    name: 'Brianna',
    description: 'Short filler',
    image: 'https://picsum.photos/seed/char02/160/130',
    page: 'brianna'
  },
  {
    name: 'Tommy',
    description: 'Basic filler',
    image: 'https://picsum.photos/seed/char03/160/130',
    page: 'tommy'
  },
  {
    name: 'Ryan',
    description: 'Sample filler',
    image: 'https://picsum.photos/seed/char04/160/130',
    page: 'ryan'
  },
  {
    name: 'Ashlie',
    description: 'Demo filler',
    image: 'https://picsum.photos/seed/char05/160/130',
    page: 'ashlie'
  }
];

const spotifyChapters = Array.from(
  { length: 13 },
  (_, index) => `${index + 1} \u0440\u043e\u0437\u0434\u0456\u043b`
);

function Blackwood({ onBack, onOpenCharacter }) {
  return (
    <main className="book-page">
      <section className="book-feature-section">
        <div className="book-feature-card">
          <div className="book-feature-layout">
            <div className="feature-media-wrap">
              <img
                className="feature-media"
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
                alt="Book visual"
              />
            </div>
            <div className="feature-content">
              <p className="feature-label">Featured Book</p>
              <h1>Book Title</h1>
              <p>
                This is the main information section of the book page. Use this block
                for the core synopsis, author context, and why this book matters for
                readers.
              </p>
              <div className="feature-meta">
                <span>Genre: Sci-Fi / Drama</span>
                <span>Format: Hardcover / eBook</span>
                <span>Pages: 384</span>
              </div>
            </div>
          </div>
          <button type="button" className="primary-button" onClick={onBack}>
            Back To Main Page
          </button>
        </div>
      </section>

      <section className="characters-section">
        <h2 className="characters-title">Characters</h2>
        <div className="characters-grid">
          {characterCards.map((character) => (
            <button
              type="button"
              className="character-card character-card-button"
              key={character.name}
              onClick={() => onOpenCharacter(character.page)}
            >
              <img className="character-image" src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>{character.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="spotify-section">
        <div className="spotify-card">
          <div className="spotify-logo-wrap" aria-hidden="true">
            <img className="spotify-logo" src={spotifyLogo} alt="Spotify logo" />
          </div>
          <div className="spotify-links-wrap">
            {spotifyChapters.map((chapter) => (
              <a
                className="spotify-link"
                href="https://open.spotify.com/"
                target="_blank"
                rel="noreferrer"
                key={chapter}
              >
                {chapter}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blackwood;
