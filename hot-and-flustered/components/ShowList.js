export default function ShowList() {
  const shows = [
    { date: 'June 26, 2026', location: 'The Vic, Devonport' },
  ];

  return (
    <section className="show-list-section">
      <h2>Upcoming Shows</h2>
      <ul className="show-list">
        {shows.map((show, i) => {
          const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.location)}`;
          return (
            <li key={i} className="show-list-item">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <strong>{show.date}</strong> - {show.location}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}