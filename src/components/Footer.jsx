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
                SPECWISE <span className="text-muted">ESTIMATING</span>
              </span>
            </div>

            <p className="font-grotesk text-muted text-sm leading-relaxed max-w-xs">
              Professional construction estimates delivered in 48 hours. Serving trade contractors
              across the Dallas TX metro area and beyond.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span
                className="font-bebas text-xs tracking-wider px-3 py-1 border border-yellow text-yellow"
                style={{ fontSize: '0.75rem' }}
              >
                DALLAS TX
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
                  href="mailto:info@specwiseestimations.com"
                  className="footer-link"
                  id="footer-email"
                >
                  info@specwiseestimations.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12145551234"
                  className="footer-link"
                  id="footer-phone"
                >
                  (214) 555-1234
                </a>
              </li>
              <li className="text-muted text-sm font-grotesk">
                Dallas, TX
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
            &copy; {year} Specwise Estimations LLC. All rights reserved.
          </p>
          <p className="font-grotesk text-muted text-xs">
            Professional estimates. Honest pricing. Fast delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}
