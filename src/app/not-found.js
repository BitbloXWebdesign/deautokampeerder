import Link from 'next/link';

export const metadata = {
  title: '404 - Pagina Niet Gevonden | De Autokampeerder',
  description: 'De opgevraagde pagina bestaat niet of is verplaatst.',
};

export default function NotFound() {
  return (
    <div className="container section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏕️</span>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>OEPS! DEZE PAGINA IS OP VAKANTIE</h1>
      <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '2rem', fontSize: '1.1rem' }}>
        De pagina die je zoekt is verplaatst of bestaat niet meer. Ontdek onze gidsen en vergelijkingen via onderstaande links.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/daktenten" className="btn btn-primary">
          Daktenten Vergelijken
        </Link>
        <Link href="/kennisbank" className="btn btn-outline">
          Kennisbank Bekijken
        </Link>
      </div>
    </div>
  );
}
