function Home({ onOpenBookPage }) {
  return (
    <>
      <section className="hero-section">
        <h1 className="site-title">Midnight Moon Archive</h1>
      </section>

      <section className="book-section-wrapper">
        <div className="book-section">
          <div className="book-cover-wrap">
            <img
              className="book-cover"
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80"
              alt="Book cover"
            />
          </div>
          <div className="book-info">
            <h2>Book Title</h2>
            <p>
              Add your book description here. This section is prepared as an
              author title block: cover on the left, title and short text on the
              right.
            </p>
            <button type="button" className="primary-button" onClick={onOpenBookPage}>
              Open Book Page
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
