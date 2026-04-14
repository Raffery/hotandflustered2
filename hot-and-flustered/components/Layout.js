export default function Layout({ children }) {
  const iconLink = {
    color: 'crimson',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    background: 'black',
    border: '2px solid crimson',
    textDecoration: 'none',
  };

  return (
    <div>
      <header className="header">
        <h1>Hot and Flustered</h1>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About Us</a>
          <a href="/code-of-conduct">Cast Code of Conduct</a>
          <a href="/lineup">Show Night Line Up</a>
          <a href="/contact">Join the Cast</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer style={{ background: 'black', color: 'white', textAlign: 'center', padding: '10px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>© 2026 Hot and Flustered | Don’t Dream It, Be It!</span>
          <span style={{ display: 'inline-flex', gap: '0.5rem' }}>
            <a href="https://www.instagram.com/hotandflusteredshadowcast/" aria-label="Instagram" style={iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="3.5" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a href="https://www.facebook.com/hotandflustered" aria-label="Facebook" style={iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}