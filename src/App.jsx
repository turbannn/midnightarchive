import { useEffect, useState } from 'react';
import Blackwood from './Blackwood';
import Home from './Home';
import Brianna from './Brianna';
import Tommy from './Tommy';
import Ryan from './Ryan';
import Ashlie from './Ashlie';
import Scott from './Scott';
import StarfieldEffect from './StarfieldEffect';
import './App.css';

const getRouteFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');
  const supportedPages = ['home', 'book', 'scott', 'brianna', 'tommy', 'ryan', 'ashlie'];
  return supportedPages.includes(page || '') ? page : 'home';
};

function App() {
  const [route, setRoute] = useState(getRouteFromUrl);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 8);

      const totalScrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalScrollableHeight > 0
          ? Math.min(1, Math.max(0, currentY / totalScrollableHeight))
          : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleNavigation = () => setRoute(getRouteFromUrl());
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const openBookPage = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', 'book');
    window.history.pushState({}, '', `${url.pathname}?${url.searchParams.toString()}`);
    setRoute('book');
    window.scrollTo(0, 0);
  };

  const openCharacterPage = (characterPage) => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', characterPage);
    window.history.pushState({}, '', `${url.pathname}?${url.searchParams.toString()}`);
    setRoute(characterPage);
    window.scrollTo(0, 0);
  };

  const openHomePage = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('page');
    const nextUrl = url.search ? `${url.pathname}?${url.searchParams.toString()}` : url.pathname;
    window.history.pushState({}, '', nextUrl);
    setRoute('home');
    window.scrollTo(0, 0);
  };

  const renderCharacterPage = () => {
    const characterPages = {
      scott: <Scott onBackToBook={openBookPage} />,
      brianna: <Brianna onBackToBook={openBookPage} />,
      tommy: <Tommy onBackToBook={openBookPage} />,
      ryan: <Ryan onBackToBook={openBookPage} />,
      ashlie: <Ashlie onBackToBook={openBookPage} />
    };

    return characterPages[route] ?? <Home onOpenBookPage={openBookPage} />;
  };

  return (
    <div className="page">
      <StarfieldEffect />

      <header
        className={`site-header ${isScrolled ? 'site-header--visible' : ''}`}
        style={{
          '--scroll-line-progress': scrollProgress,
          '--scroll-line-opacity': (scrollProgress * 0.4).toFixed(3)
        }}
      >
        <nav className="site-nav" aria-label="Primary">
          <span>Discussion</span>
          <span>Blog</span>
          <span>Profile</span>
        </nav>
      </header>

      {route === 'home' ? (
        <Home onOpenBookPage={openBookPage} />
      ) : route === 'book' ? (
        <Blackwood onBack={openHomePage} onOpenCharacter={openCharacterPage} />
      ) : (
        renderCharacterPage()
      )}

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Privacies</h3>
            <span>Pravacy policy</span>
            <span>Privacy</span>
          </div>
        </div>

        <div className="footer-bottom">
          <small className="footer-company">@bibizyan&co</small>
          <div className="footer-social">
            <a
              className="social-icon"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.8" r="1.2" />
              </svg>
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
              </svg>
            </a>
            <a
              className="social-icon"
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 5c.8 1.3 2.2 2.1 3.7 2.2V11c-1.4 0-2.8-.4-4-.9v5.2a5 5 0 1 1-4.2-4.9V14a1.8 1.8 0 1 0 .8 1.5V4h3.7Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
