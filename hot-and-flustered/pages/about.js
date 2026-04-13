import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1rem' }}>
        <h1>About Us</h1>
        <p>
          Hot and Flustered is a community-driven Rocky Horror Picture Show shadow cast.
          We bring live performance, audience interaction, and a celebration of fun, creativity,
          and acceptance to every show.
        </p>
        <h2>What We Stand For</h2>
        <p>
          We perform the classic Rocky Horror story with energy, silliness, and respect.
          Our cast is made up of fans, performers, and supporters who love the show and want
          to make each evening unforgettable.
        </p>
        <h2>Our Mission</h2>
        <p>
          We aim to create a warm, welcoming experience where guests can be themselves,
          enjoy the music, and participate in the madness.
          Whether you're a first-timer or a longtime fan, our stage is for everyone.
        </p>
      </section>
    </Layout>
  );
}
