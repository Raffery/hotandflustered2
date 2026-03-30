import { useState } from 'react';
import Layout from '../components/Layout';

const galleryImages = [
  { src: '/Rocky.jpg', alt: 'Rocky Horror Poster' },
  { src: '/images/show1.jpg', alt: 'Show 1' },
  { src: '/images/show2.jpg', alt: 'Show 2' },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const hasImages = galleryImages.length > 0;

  const prevImage = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + galleryImages.length - 1) % galleryImages.length);
  };

  const nextImage = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % galleryImages.length);
  };

  return (
    <Layout>
      <section className="gallery">
        <h2>Cast & Show Gallery</h2>
        <p>Click any image to open a full-screen view. Use arrows to browse.</p>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <button
              key={img.src}
              className="gallery-thumb"
              onClick={() => setOpenIndex(idx)}
              aria-label={`Open ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} />
            </button>
          ))}
        </div>
      </section>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={() => setOpenIndex(null)} aria-label="Close">
            ×
          </button>
          <button className="lightbox-nav left" onClick={prevImage} aria-label="Previous image">
            ‹
          </button>
          <img className="lightbox-img" src={galleryImages[openIndex].src} alt={galleryImages[openIndex].alt} />
          <button className="lightbox-nav right" onClick={nextImage} aria-label="Next image">
            ›
          </button>
        </div>
      )}

      {!hasImages && <p>No photos available yet.</p>}
    </Layout>
  );
}