import './App.css';

function App() {
  return (
    <div className="page">
      <div className="hero-banner">
        <img
          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=2000&q=80"
          alt="Space banner"
        />
      </div>

      <div className="book-section">
        <div className="book-cover-wrap">
          <img
            className="book-cover"
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80"
            alt="Book cover"
          />
        </div>
        <div className="book-info">
          <h1>Book Title</h1>
          <p>
            Add your book description here. This section is prepared as an
            author title block: cover on the left, title and short text on the
            right.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;