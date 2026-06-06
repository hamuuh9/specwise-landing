export default function Footer() {
  return (
    <footer className="bg-[#060a16] border-t border-border-nav py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-bebas text-accent text-2xl tracking-wider mb-4">
              SPECWISE ESTIMATIONS
            </h3>
            <p className="font-inter text-text-secondary text-sm leading-relaxed">
              Professional construction estimating services for trade contractors who win more bids.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bebas text-white text-xl tracking-wide mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm text-text-secondary font-inter">
              <li>
                <a href="mailto:info@specwiseestimations.com" className="hover:text-accent transition-colors">
                  info@specwiseestimations.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-white text-xl tracking-wide mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-text-secondary font-inter">
              <li>
                <a href="/" className="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="/request" className="hover:text-accent transition-colors">Request Estimate</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-nav text-center">
          <p className="text-text-secondary text-sm font-inter">
            &copy; 2025 Specwise Estimations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
