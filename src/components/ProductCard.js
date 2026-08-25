export default function ProductCard({ title, brand, price, image, affiliateUrl, rodenUrl }) {
  const hasBoth = affiliateUrl && rodenUrl;

  return (
    <div 
      className="card"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div className="card-img-wrapper">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>{brand}</span>
        <h3 style={{ marginTop: '4px' }}>{title}</h3>
        <p className="card-price">Vanaf € {price}</p>
        
        <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
          {hasBoth ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <a 
                href={affiliateUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={{ textAlign: 'center', textDecoration: 'none', padding: '10px 6px', fontSize: '0.85rem' }}
              >
                Bol.com &rarr;
              </a>
              <a 
                href={rodenUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={{ textAlign: 'center', textDecoration: 'none', padding: '10px 6px', fontSize: '0.85rem', backgroundColor: '#1b4d3e', borderColor: '#1b4d3e' }}
              >
                Roden &rarr;
              </a>
            </div>
          ) : (
            <a 
              href={affiliateUrl || rodenUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              style={{ width: '100%', textAlign: 'center', textDecoration: 'none', display: 'block' }}
            >
              Bekijk Prijs & Beschikbaarheid &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
