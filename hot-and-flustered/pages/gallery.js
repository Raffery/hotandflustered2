import Layout from '../components/Layout';

export default function Gallery() {
  return (
    <Layout>
      <h2>Cast & Show Gallery</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <img src="/images/show1.jpg" alt="Show 1" width="300" />
        <img src="/images/show2.jpg" alt="Show 2" width="300" />
      </div>
    </Layout>
  );
}