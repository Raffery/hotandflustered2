import Layout from '../components/Layout';
import ShowList from '../components/ShowList';

export default function Home() {
  return (
    <Layout>
      <section style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Hot and Flustered</h1>
        <p>The Rocky Horror Picture Show Shadow Cast</p>
      </section>
      <ShowList />
    </Layout>
  );
}