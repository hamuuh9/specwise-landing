import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy" style={{ borderTop: '4px solid #FFD600' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand column */}
          <div>
            {/* Logo lockup */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-flex items-center justify-center bg-yellow border-2 border-ink px-2 py-0.5"
                style={{ boxShadow: '2px 2px 0 #FFD600' }}
              >
                <span className="font-bebas text-ink text-lg leading-none tracking-widest">SW</span>
              </span>
              <span className="font-bebas text-white text-xl tracking-widest leading-none">
                SPECWISE <span className="text-muted">ESTIMATINGS</span>
              </span>
            </div>

            <p className="font-grotesk text-muted text-sm leading-relaxed max-w-xs">
              Professional construction estimates delivered in 48 hours. Serving trade contractors
              nationwide.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span
                className="font-bebas text-xs tracking-wider px-3 py-1 border border-yellow text-yellow"
                style={{ fontSize: '0.75rem' }}
              >
                NATIONWIDE
              </span>
              <span
                className="font-bebas text-xs tracking-wider px-3 py-1 border border-yellow text-yellow"
                style={{ fontSize: '0.75rem' }}
              >
                23 TRADES
              </span>
              <span
                className="font-bebas text-xs tracking-wider px-3 py-1 border border-yellow text-yellow"
                style={{ fontSize: '0.75rem' }}
              >
                48-HR TURNAROUND
              </span>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-bebas text-white text-xl tracking-widest mb-5">CONTACT</h4>
            <ul className="space-y-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <a
                  href="mailto:info@specwiseestimatings.com"
                  className="footer-link"
                  id="footer-email"
                >
                  info@specwiseestimatings.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/13023342420"
                  className="footer-link"
                  id="footer-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD600" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.428a.5.5 0 0 0 .611.612l5.7-1.495A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.524-5.222-1.435l-.374-.223-3.882 1.018 1.003-3.77-.244-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  +1 (302) 334-2420
                </a>
                <span className="font-grotesk text-muted" style={{ fontSize: '0.7rem', display: 'block', marginTop: '2px', paddingLeft: '22px' }}>(WhatsApp only)</span>
              </li>
              <li className="text-muted text-sm font-grotesk">
                1001 S Main St # 5332 Kalispell, MT 59901
              </li>
            </ul>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-bebas text-white text-xl tracking-widest mb-5">QUICK LINKS</h4>
            <ul className="space-y-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link to="/" className="footer-link" id="footer-link-home">Home</Link>
              </li>
              <li>
                <Link to="/request" className="footer-link" id="footer-link-request">Request an Estimate</Link>
              </li>
              <li>
                <a href="/#how-it-works" className="footer-link" id="footer-link-how">How It Works</a>
              </li>
              <li>
                <a href="/#trades" className="footer-link" id="footer-link-trades">Trades We Cover</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255, 214, 0, 0.15)' }}
        >
          <p className="font-grotesk text-muted text-sm">
            &copy; {year} Specwise Estimatings LLC. All rights reserved.
          </p>
          <p className="font-grotesk text-muted text-xs">
            Professional estimates. Honest pricing. Fast delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}
