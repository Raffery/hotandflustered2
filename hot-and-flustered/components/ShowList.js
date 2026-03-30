export default function ShowList() {
  const shows = [
    { date: 'June 26, 2026', location: 'The Vic, Devonport' },
  ];

  return (
    <section style={{ padding: '20px' }}>
      <h2>Upcoming Shows</h2>
      <ul>
        {shows.map((show, i) => (
          <li key={i}>
            <strong>{show.date}</strong> - {show.location}
          </li>
        ))}
      </ul>
    </section>
  );
}