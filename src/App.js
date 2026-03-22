import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page">
      <header className={`site-header ${isScrolled ? 'site-header--visible' : ''}`}>
        <nav className="site-nav" aria-label="Primary">
          <a href="#discussion">Discussion</a>
          <a href="#blog">Blog</a>
          <a href="#profile">Profile</a>
        </nav>
      </header>

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
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
