import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <Layout>
      <section style={{ textAlign: 'center', padding: '50px' }}>
        <h1 style={{ textAlign: 'center' }}>Join the Cast</h1>
        <ContactForm />
      </section>
    </Layout>
  );
}