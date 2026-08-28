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
      <div 
        aria-hidden="true"
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'var(--bg-light)',
          border: '2px solid var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          flexShrink: 0
        }}
      >
        🏕️
      </div>
      <div>
        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary)' }}>Redactie De Autokampeerder</h4>
        <p style={{ margin: '6px 0 10px 0', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
          Onafhankelijk vergelijkingsplatform voor autokampeerders. Onze redactie analyseert daktenten, dakdragers en 12V outdoor gear op basis van fabrieksspecificaties, daklastnormen en onafhankelijke gebruikersbeoordelingen.
        </p>
        <Link href="/transparantie-en-methodiek" style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600, textDecoration: 'underline' }}>
          Lees meer over onze redactie & testmethodiek &rarr;
        </Link>
      </div>
    </div>
  );
}
