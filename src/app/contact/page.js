import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact | De Autokampeerder',
  description: 'Neem contact op met de redactie van De Autokampeerder voor vragen over daktenten, advies of samenwerkingen.',
  alternates: {
    canonical: 'https://www.deautokampeerder.nl/contact',
  },
};

export default function Contact() {
  return (
    <div className="container section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: 'var(--spacing-xl)' }}>
      <h1>Contact</h1>
      
      <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
        <p>Heb je vragen over een daktent, wil je advies over jouw specifieke auto, of ben je een fabrikant die een product wil laten tonen? Neem gerust contact met ons op!</p>
      </div>

      <ContactForm />
      
      <div style={{ marginTop: 'var(--spacing-xl)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Andere manieren om ons te bereiken</h3>
        <p><strong>E-mail:</strong> <a href="mailto:info@deautokampeerder.nl" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>info@deautokampeerder.nl</a><br/>
        <strong>Social Media:</strong> Volg ons op Instagram voor de laatste kampeer avonturen.</p>
      </div>
    </div>
  );
}
