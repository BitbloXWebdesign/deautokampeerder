'use client';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formEnabled, setFormEnabled] = useState(true);

  useEffect(() => {
    fetch('/site-config.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.modules && data.modules.form !== undefined) {
          setFormEnabled(data.modules.form);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@deautokampeerder.nl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: 'var(--spacing-xl)' }}>
      <h1>Contact</h1>
      
      <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
        <p>Heb je vragen over een daktent, wil je advies over jouw specifieke auto, of ben je een fabrikant die een product wil laten tonen? Neem gerust contact met ons op!</p>
      </div>

      {formEnabled ? (
        submitted ? (
          <div style={{ background: '#E6F4EA', border: '1px solid #34A853', padding: '24px', borderRadius: '12px', color: '#137333', textAlign: 'center' }}>
            <h3 style={{ color: '#137333', marginBottom: '8px' }}>🎉 Bericht Succesvol Verzonden!</h3>
            <p style={{ margin: 0 }}>Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op via e-mail.</p>
          </div>
        ) : (
          <div style={{ background: 'var(--card-bg)', padding: 'var(--spacing-lg)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-md">
              <input type="hidden" name="_subject" value="Nieuw contactbericht via DeAutokampeerder.nl" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="flex flex-col">
                <label htmlFor="category" style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--primary)' }}>Waar heeft u een vraag over?</label>
                <select id="category" name="category" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '1rem', background: '#ffffff', color: '#1f2937' }}>
                  <option value="Advies Daktent">⛺ Advies over een daktent op mijn auto</option>
                  <option value="Vraag Daklast/Dakdragers">🚗 Vraag over daklast of passende dakdragers</option>
                  <option value="Samenwerking/Fabrikant">🤝 Samenwerking of Fabrikant product aanmelden</option>
                  <option value="Overig">❓ Overige vraag</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--primary)' }}>Naam</label>
                <input type="text" id="name" name="name" required placeholder="Jouw naam" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '1rem' }} />
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="email" style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--primary)' }}>E-mailadres</label>
                <input type="email" id="email" name="email" required placeholder="jouw@email.nl" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '1rem' }} />
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="message" style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--primary)' }}>Bericht</label>
                <textarea id="message" name="message" required rows="5" placeholder="Hoe kunnen we je helpen?" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
              </div>
              
              <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>
                {loading ? 'Verzenden...' : 'Verstuur Bericht'}
              </button>
            </form>
          </div>
        )
      ) : (
        <div style={{ background: '#FFFBEB', border: '1px solid #F59E0B', padding: '20px', borderRadius: '12px', color: '#92400E' }}>
          <p style={{ margin: 0 }}><strong>Let op:</strong> Het online contactformulier is momenteel tijdelijk uitgeschakeld. Je kunt ons wel direct bereiken via onderstaande e-mailgegevens.</p>
        </div>
      )}
      
      <div style={{ marginTop: 'var(--spacing-xl)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Andere manieren om ons te bereiken</h3>
        <p><strong>E-mail:</strong> <a href="mailto:info@deautokampeerder.nl" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>info@deautokampeerder.nl</a><br/>
        <strong>Social Media:</strong> Volg ons op Instagram voor de laatste kampeer avonturen.</p>
      </div>
    </div>
  );
}
