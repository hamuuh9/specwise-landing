import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const TRADES = [
  'Electrical/Low Voltage',
  'Plumbing',
  'Mechanical',
  'Roofing/Gutters',
  'Remodeling',
  'General Contractor',
  'Painting',
  'Drywall',
  'Framing',
  'Flooring',
  'Welding',
  'Landscape',
  'Metal Fabrication',
  'Concrete',
  'Paving',
  'Fencing',
  'Solar',
  'Glass/Storefront',
  'Glazing',
  'Deck',
  'Fireproofing',
  'Carpentry',
  'Kitchen & Bath Remodeling',
];

const STEPS = [
  {
    number: '01',
    title: 'SUBMIT YOUR PLANS',
    description:
      'Upload blueprints, plans, or project details through our estimate request form. We accept PDFs, images, and written scopes.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" stroke="#FFD600" strokeWidth="2.5" />
        <path d="M11 16h10M16 11v10" stroke="#FFD600" strokeWidth="2.5" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'WE ESTIMATE IT',
    description:
      'Our experienced estimators analyze your plans and produce a comprehensive, accurate estimate — built to win.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" stroke="#FFD600" strokeWidth="2.5" />
        <path d="M10 22l4-8 4 6 3-4" stroke="#FFD600" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    ),
  },
  {
    number: '03',
    title: '48-HOUR DELIVERY',
    description:
      'Your professional estimate lands in your inbox within 48 hours — ready to submit and win the bid.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" stroke="#FFD600" strokeWidth="2.5" />
        <path d="M16 10v6l4 3" stroke="#FFD600" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    ),
  },
];

const WHY_ITEMS = [
  {
    badge: '48 HOURS',
    badgeVariant: 'orange',
    title: 'FASTEST IN THE TRADE',
    body: 'Other estimating firms take 5–10 days. We turn around a professional, bid-ready estimate in 48 hours — every time.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M20 14v6l5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    badge: 'ACCURATE',
    badgeVariant: 'yellow',
    title: 'PROFESSIONAL PRECISION',
    body: 'Every estimate is produced by experienced construction estimators. Detailed line-item breakdowns — not ballpark guesses.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="2" />
        <path d="M10 28l8-12 6 8 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    ),
  },
  {
    badge: 'FLEXIBLE',
    badgeVariant: 'yellow',
    title: 'NO COMMITMENT',
    body: 'Pay per estimate. No retainer fees, no long-term contracts, no lock-in. Engage us when you need us.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="2" />
        <path d="M14 20l5 5 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    ),
  },
];

const MARQUEE_ITEMS = [
  '48-HOUR DELIVERY',
  ...TRADES,
];

/* ═══════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════ */
function HeroSection() {
  const line1 = 'PROFESSIONAL'.split('');
  const line2 = ['ESTIMATES.'];
  const line3 = ['DONE IN'];
  const line4 = ['48 HOURS.'];

  return (
    <section className="dot-grid min-h-screen flex items-center pt-16 relative overflow-hidden">

      {/* ── Giant 48 block (right side, desktop) ── */}
      <div
        className="hidden lg:flex absolute right-0 top-0 bottom-0 w-2/5 items-center justify-center"
        style={{ background: '#FFD600', borderLeft: '3px solid #0B0B0B' }}
        aria-hidden="true"
      >
        {/* Diagonal stripes overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(0,0,0,0.04) 18px, rgba(0,0,0,0.04) 20px)',
          }}
        />
        <motion.div
          className="relative z-10 text-center"
          initial={{ y: 60, opacity: 1 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
        >
          <span
            className="font-bebas text-ink leading-none block select-none"
            style={{ fontSize: 'clamp(120px, 18vw, 240px)', lineHeight: 0.85 }}
          >
            48
          </span>
          <span
            className="font-bebas text-ink tracking-widest block mt-2"
            style={{ fontSize: 'clamp(18px, 2.5vw, 28px)' }}
          >
            HOUR DELIVERY
          </span>
          {/* Hard border box around 48 */}
          <div
            className="absolute inset-x-[-2rem] inset-y-[-1.5rem] border-2 border-ink pointer-events-none"
            style={{ boxShadow: '6px 6px 0 #0B0B0B' }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Stat chips on the panel */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col gap-3 w-full px-10">
          {['23 TRADES COVERED', 'NATIONWIDE', 'BID-READY ACCURACY'].map((stat, i) => (
            <motion.div
              key={stat}
              className="nb-badge nb-badge-dark w-full justify-center text-center"
              style={{ fontSize: '0.8rem', padding: '6px 12px' }}
              initial={{ y: 20, opacity: 1 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.4 + i * 0.1 }}
            >
              {stat}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Left content ── */}
      <div
        className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10"
        style={{ paddingTop: '2rem', paddingBottom: '4rem' }}
      >
        <div className="lg:w-3/5 lg:pr-20">

          {/* Location badge */}
          <motion.div
            initial={{ y: 20, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="mb-6"
          >
            <span className="nb-badge nb-badge-dark" id="hero-location-badge">
              <span
                className="inline-block w-2 h-2 bg-yellow animate-float"
                aria-hidden="true"
              />
              NATIONWIDE &mdash; 23 TRADES
            </span>
          </motion.div>

          {/* Main headline */}
          <h1
            className="font-bebas text-ink leading-none"
            style={{ fontSize: 'clamp(52px, 9vw, 96px)' }}
          >
            {/* Line 1 — letter by letter */}
            <span className="block overflow-hidden">
              {line1.map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  className="inline-block hero-text-visible"
                  style={{ marginRight: char === ' ' ? '0.25em' : undefined }}
                  initial={{ y: 80, opacity: 1 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 90,
                    damping: 18,
                    delay: 0.05 + i * 0.025,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>

            {/* Line 2 */}
            <span className="block overflow-hidden">
              {line2.map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  className="inline-block mr-3 hero-text-visible"
                  initial={{ y: 80, opacity: 1 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 90,
                    damping: 18,
                    delay: 0.2 + i * 0.06,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>

            {/* Line 3 — different color */}
            <span className="block overflow-hidden">
              {line3.map((word, i) => (
                <motion.span
                  key={`l3-${i}`}
                  className="inline-block mr-3 text-muted hero-text-visible"
                  initial={{ y: 80, opacity: 1 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 90,
                    damping: 18,
                    delay: 0.3 + i * 0.06,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>

            {/* Line 4 — yellow accent */}
            <span className="block overflow-hidden">
              {line4.map((word, i) => (
                <motion.span
                  key={`l4-${i}`}
                  className="inline-block mr-3 hero-text-visible"
                  style={{ color: '#FFD600', WebkitTextStroke: '2px #0B0B0B' }}
                  initial={{ y: 80, opacity: 1 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 90,
                    damping: 18,
                    delay: 0.38 + i * 0.06,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Horizontal rule — draws in */}
          <motion.div
            style={{ height: '3px', background: '#0B0B0B', maxWidth: '320px', marginTop: '20px', transformOrigin: 'left' }}
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.65, ease: 'easeOut' }}
          />

          {/* Sub-headline */}
          <motion.p
            className="font-grotesk text-muted text-lg leading-relaxed mt-6 max-w-lg"
            initial={{ y: 20, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.55 }}
          >
            Built for trade contractors (1&ndash;50 employees) who need professional, bid-ready estimates
            fast — without the overhead of in-house estimators.
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 items-start"
            initial={{ y: 20, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.65 }}
          >
            <Link
              to="/request"
              className="nb-btn-primary text-lg"
              id="hero-cta-primary"
            >
              REQUEST YOUR ESTIMATE →
            </Link>

            {/* Mobile 48 badge (shows only on mobile since desktop has the panel) */}
            <div className="flex lg:hidden items-center gap-3">
              <div
                className="bg-yellow border-2 border-ink px-4 py-3 text-center"
                style={{ boxShadow: '3px 3px 0 #0B0B0B' }}
              >
                <span className="font-bebas text-ink leading-none block" style={{ fontSize: '2.5rem' }}>48</span>
                <span className="font-bebas text-ink tracking-widest block text-xs">HR DELIVERY</span>
              </div>
            </div>
          </motion.div>

          {/* Social proof ticker */}
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ y: 20, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.75 }}
          >
            {['23 TRADES SERVED', 'BID-READY ACCURACY', 'NO CONTRACT REQUIRED'].map((item) => (
              <span key={item} className="nb-badge" style={{ fontSize: '0.75rem' }}>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TRADES MARQUEE SECTION
═══════════════════════════════════════════════════════ */
function MarqueeSection() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const doubledRev = [...TRADES, ...TRADES];

  return (
    <section className="bg-ink overflow-hidden" style={{ borderTop: '3px solid #FFD600', borderBottom: '3px solid #FFD600' }}>
      {/* Row 1 — forward */}
      <div className="marquee-outer py-3" style={{ borderBottom: '1px solid rgba(255,214,0,0.2)' }}>
        <div className="marquee-inner">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="font-bebas text-yellow tracking-widest mx-6 whitespace-nowrap"
              style={{ fontSize: '1rem' }}
            >
              {item}
              <span className="mx-4 opacity-50" aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </div>
      {/* Row 2 — reverse */}
      <div className="marquee-outer py-3">
        <div className="marquee-inner-rev">
          {doubledRev.map((item, i) => (
            <span
              key={i}
              className="font-bebas text-white tracking-widest mx-6 whitespace-nowrap opacity-60"
              style={{ fontSize: '0.9rem' }}
            >
              {item}
              <span className="mx-4 opacity-40" aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   HOW IT WORKS SECTION
═══════════════════════════════════════════════════════ */
function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-ink py-24" id="how-it-works">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ y: 30, opacity: 1 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="nb-badge nb-badge-orange mb-4 inline-block" style={{ fontSize: '0.8rem' }}>
            THE PROCESS
          </span>
          <h2
            className="font-bebas text-white leading-none"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            HOW IT WORKS
          </h2>
          <p className="font-grotesk text-muted text-base mt-3 max-w-md">
            Three steps. 48 hours. A professional estimate in your hands.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={ref}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="step-card"
              style={{ background: '#111827' }}
              initial={{ y: 40, opacity: 1 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Watermark number */}
              <span className="step-number-bg" aria-hidden="true">{step.number}</span>

              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Step number */}
              <span className="font-mono text-yellow text-xs font-semibold tracking-widest block mb-2">
                STEP {step.number}
              </span>

              {/* Title */}
              <h3 className="font-bebas text-white text-2xl tracking-wide mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-grotesk text-muted text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector arrow (desktop, not on last) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10"
                  aria-hidden="true"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="#FFD600" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TRADES GRID SECTION
═══════════════════════════════════════════════════════ */
function TradesSection() {
  return (
    <section className="bg-paper py-24" id="trades" style={{ borderTop: '3px solid #0B0B0B' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ y: 30, opacity: 1 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="nb-badge nb-badge-dark mb-4 inline-block" style={{ fontSize: '0.8rem' }}>
              WHAT WE ESTIMATE
            </span>
            <h2
              className="font-bebas text-ink leading-none"
              style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
            >
              23 TRADES.<br className="sm:hidden" /> ONE ESTIMATOR.
            </h2>
          </motion.div>

          {/* Counter */}
          <motion.div
            className="hidden md:flex flex-col items-center justify-center border-2 border-ink p-4"
            style={{ boxShadow: '4px 4px 0 #0B0B0B', minWidth: '80px' }}
            initial={{ y: 20, opacity: 1 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-hidden="true"
          >
            <span className="font-bebas text-yellow text-5xl leading-none"
              style={{ WebkitTextStroke: '2px #0B0B0B' }}>
              23
            </span>
            <span className="font-bebas text-ink text-xs tracking-widest">TRADES</span>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {TRADES.map((trade, i) => (
            <motion.div
              key={trade}
              className="trade-pill"
              initial={{ y: 24, opacity: 1 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.35, delay: i * 0.025 }}
            >
              <span className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 bg-yellow border border-ink flex-shrink-0"
                  aria-hidden="true"
                />
                {trade}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA sub-prompt */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ y: 20, opacity: 1 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="font-grotesk text-muted text-sm">
            Don't see your trade?{' '}
            <Link to="/request" className="text-ink font-semibold underline underline-offset-2">
              Contact us — we likely cover it.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   WHY SPECWISE SECTION
═══════════════════════════════════════════════════════ */
function WhySection() {
  return (
    <section className="bg-navy py-24" style={{ borderTop: '3px solid #FFD600' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ y: 30, opacity: 1 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="nb-badge nb-badge-yellow mb-4 inline-block" style={{ fontSize: '0.8rem' }}>
            WHY CHOOSE US
          </span>
          <h2
            className="font-bebas text-white leading-none"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            BUILT FOR CONTRACTORS<br />WHO MOVE FAST.
          </h2>
        </motion.div>

        {/* Feature blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="feature-block"
              initial={{ y: 40, opacity: 1 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Top row: icon + badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="text-white">{item.icon}</div>
                <span
                  className={`nb-badge ${
                    item.badgeVariant === 'orange' ? 'nb-badge-orange' : ''
                  }`}
                  style={{ fontSize: '0.7rem' }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bebas text-white text-2xl tracking-wide mb-3">
                {item.title}
              </h3>

              {/* Body */}
              <p className="font-grotesk text-muted text-sm leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FINAL CTA SECTION
═══════════════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section className="cta-stripe py-20" style={{ borderTop: '3px solid #0B0B0B' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* Left: headline */}
          <motion.div
            className="lg:max-w-2xl"
            initial={{ y: 30, opacity: 1 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55 }}
          >
            <h2
              className="font-bebas text-ink leading-none"
              style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}
            >
              READY TO WIN<br />MORE BIDS?
            </h2>
            <p className="font-grotesk text-ink text-base mt-4 max-w-md leading-relaxed opacity-80">
              Submit your plans and receive a professional estimate within 48 hours.
              Stop leaving bids on the table.
            </p>
          </motion.div>

          {/* Right: CTA + mini trust items */}
          <motion.div
            className="flex flex-col items-start lg:items-end gap-5"
            initial={{ y: 30, opacity: 1 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <Link
              to="/request"
              className="nb-btn-primary text-xl"
              id="cta-section-button"
              style={{ background: '#0B0B0B', color: '#FFD600', boxShadow: '4px 4px 0 #0B0B0B' }}
            >
              REQUEST YOUR ESTIMATE →
            </Link>

            {/* Quick trust marks */}
            <div className="flex flex-wrap gap-2">
              {['48-HR TURNAROUND', 'NO CONTRACT', 'PROFESSIONAL ACCURACY'].map((item) => (
                <span
                  key={item}
                  className="font-bebas text-ink border border-ink px-3 py-1 text-xs tracking-wider"
                  style={{ fontSize: '0.72rem' }}
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <HowItWorksSection />
      <TradesSection />
      <WhySection />
      <CtaSection />
    </>
  );
}
