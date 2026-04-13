export default function Layout({ children }) {
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
        © 2026 Hot and Flustered | Don’t Dream It, Be It!
      </footer>
    </div>
  );
}