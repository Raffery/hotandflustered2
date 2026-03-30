import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, we'll be in touch!`);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Tell us why you want to join" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}