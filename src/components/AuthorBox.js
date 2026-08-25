import Link from 'next/link';

export default function AuthorBox() {
  return (
    <div style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--border-light)',
      borderRadius: '16px',
      padding: '24px',
      marginTop: 'var(--spacing-xl)',
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
    }}>
      <img 
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
        alt="Stefan - De Autokampeerder" 
        style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '3px solid var(--primary)' }}
      />
      <div>
        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary)' }}>Geschreven door Stefan – Daktent Specialist</h4>
        <p style={{ margin: '6px 0 10px 0', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
          Autokampeerder in hart en nieren. Test en vergelijkt daktenten, dakdragers en 12V outdoor uitrusting op basis van technische specificaties, veiligheidskaders en praktijkervaring.
        </p>
        <Link href="/over-ons" style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600, textDecoration: 'underline' }}>
          Lees meer over onze redactie & testmethodiek &rarr;
        </Link>
      </div>
    </div>
  );
}
