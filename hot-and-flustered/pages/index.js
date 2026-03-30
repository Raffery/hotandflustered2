import Layout from '../components/Layout';
import ShowList from '../components/ShowList';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <Layout>
      <section style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Hot and Flustered</h1>
        <p>The Rocky Horror Picture Show Shadow Cast</p>
      </section>
      <ShowList />
      <section style={{ marginTop: '2rem', padding: '0 1rem' }}>
        <h2 style={{ textAlign: 'center', color: 'crimson' }}>Contact Us</h2>
        <ContactForm />
      </section>
    </Layout>
  );
}