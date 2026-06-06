import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      'Upload your blueprints, plans, or project details through our simple request form. We accept PDFs, images, and detailed project descriptions.',
  },
  {
    number: '02',
    title: 'WE ESTIMATE WITHIN 48 HOURS',
    description:
      'Our experienced estimators analyze your plans and deliver a comprehensive, accurate estimate — fast enough to keep your bidding on track.',
  },
  {
    number: '03',
    title: 'YOU WIN MORE BIDS',
    description:
      'Armed with precise, professional estimates, you submit more competitive bids with confidence and close more projects.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* ── Hero Section ────────────────────────────── */}
      <section className="blueprint-grid min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="font-bebas text-white leading-none" style={{ fontSize: 'clamp(48px, 8vw, 80px)' }}>
              CONSTRUCTION ESTIMATES.
              <br />
              DONE IN 48 HOURS.
            </h1>
            <p className="font-inter text-text-secondary text-lg mt-6 max-w-xl leading-relaxed">
              Free sample estimate, zero commitment. Built for trade contractors who win more bids.
            </p>
            <Link
              to="/request"
              className="inline-block mt-8 bg-accent text-bg font-bebas text-xl px-10 py-4 tracking-wide hover:bg-yellow-400 transition-colors duration-200 no-underline"
            >
              GET YOUR FREE ESTIMATE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── USP Bar ─────────────────────────────────── */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {['FREE SAMPLE ESTIMATE', '48-HOUR TURNAROUND', 'ZERO COMMITMENT REQUIRED'].map(
            (item) => (
              <p key={item} className="font-bebas text-bg text-xl md:text-2xl tracking-wider">
                {item}
              </p>
            )
          )}
        </div>
      </section>

      {/* ── Trades Section ──────────────────────────── */}
      <section className="bg-bg-section py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-bebas text-accent text-center mb-12"
            style={{ fontSize: 'clamp(36px, 5vw, 48px)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            WHAT WE ESTIMATE
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRADES.map((trade, i) => (
              <motion.div
                key={trade}
                className="bg-bg-card border-l-[3px] border-accent px-5 py-4 hover:bg-[#1a2233] transition-colors duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <span className="font-inter text-white text-sm">{trade}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────── */}
      <section className="bg-bg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="font-bebas text-accent text-center mb-16"
            style={{ fontSize: 'clamp(36px, 5vw, 48px)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            HOW IT WORKS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <span className="font-bebas text-accent leading-none" style={{ fontSize: '64px' }}>
                  {step.number}
                </span>
                <h3 className="font-bebas text-white text-2xl tracking-wide mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────── */}
      <section className="bg-bg-section py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bebas text-white text-4xl md:text-5xl mb-4">
              READY TO WIN MORE BIDS?
            </h2>
            <p className="font-inter text-text-secondary text-lg mb-8 max-w-lg mx-auto">
              Get your free sample estimate today. No commitment, no payment — just results.
            </p>
            <Link
              to="/request"
              className="inline-block bg-accent text-bg font-bebas text-xl px-12 py-4 tracking-wide hover:bg-yellow-400 transition-colors duration-200 no-underline"
            >
              GET YOUR FREE ESTIMATE
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
