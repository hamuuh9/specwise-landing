import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

const NEXT_STEPS = [
  {
    num: '01',
    title: 'Review & Acknowledgement',
    body: 'We review your submission and confirm receipt within a few hours.',
  },
  {
    num: '02',
    title: 'Estimator Assigned',
    body: 'A trade-specific estimator is assigned to your project immediately.',
  },
  {
    num: '03',
    title: 'Estimate Delivered',
    body: 'Your professional, bid-ready estimate arrives within 48 hours.',
  },
];

const TRUST_ITEMS = [
  { label: '48-HR TURNAROUND', icon: '⚡' },
  { label: 'PROFESSIONAL ACCURACY', icon: '✓' },
  { label: 'SECURE SUBMISSION', icon: '🔒' },
  { label: 'NO COMMITMENT', icon: '◆' },
];

/* ═══════════════════════════════════════════════════════
   FORM FIELD COMPONENTS
═══════════════════════════════════════════════════════ */
function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="nb-label">{label}</label>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════════════════════ */
function Sidebar() {
  return (
    <div className="flex flex-col gap-6">

      {/* What happens next */}
      <div
        className="bg-ink p-6 border-2 border-yellow"
        style={{ boxShadow: '4px 4px 0 #FFD600' }}
      >
        <h3 className="font-bebas text-yellow text-xl tracking-widest mb-5">
          WHAT HAPPENS NEXT
        </h3>
        <div className="flex flex-col gap-5">
          {NEXT_STEPS.map((step) => (
            <div key={step.num} className="flex gap-4">
              <span
                className="font-mono text-yellow text-sm font-semibold flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                {step.num}
              </span>
              <div>
                <p className="font-grotesk text-white text-sm font-semibold leading-snug mb-1">
                  {step.title}
                </p>
                <p className="font-grotesk text-muted text-xs leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust signals */}
      <div className="bg-paper border-2 border-ink p-5" style={{ boxShadow: '4px 4px 0 #0B0B0B' }}>
        <h4 className="font-bebas text-ink text-lg tracking-widest mb-4">WHY SPECWISE</h4>
        <div className="flex flex-col gap-3">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span
                className="w-8 h-8 bg-yellow border border-ink flex items-center justify-center text-ink text-sm flex-shrink-0"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="font-bebas text-ink tracking-wider text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 48 hour badge */}
      <div
        className="bg-yellow border-2 border-ink p-6 text-center"
        style={{ boxShadow: '4px 4px 0 #0B0B0B' }}
      >
        <span
          className="font-bebas text-ink leading-none block"
          style={{ fontSize: '4rem', WebkitTextStroke: '1px #0B0B0B' }}
        >
          48
        </span>
        <span className="font-bebas text-ink tracking-widest block text-sm">HOUR DELIVERY</span>
        <p className="font-grotesk text-ink text-xs mt-2 opacity-70">
          From submission to estimate — guaranteed.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SUCCESS STATE
═══════════════════════════════════════════════════════ */
function SuccessState() {
  return (
    <motion.div
      key="success"
      className="flex flex-col items-center text-center py-20"
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Check box */}
      <motion.div
        className="w-24 h-24 bg-yellow border-2 border-ink flex items-center justify-center mb-8"
        style={{ boxShadow: '4px 4px 0 #0B0B0B' }}
        initial={{ scale: 0.8, opacity: 1 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-label="Success">
          <path
            d="M8 22l10 12 18-20"
            stroke="#0B0B0B"
            strokeWidth="4"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </motion.div>

      <span className="nb-badge nb-badge-orange mb-5" style={{ fontSize: '0.8rem' }}>
        SUBMITTED SUCCESSFULLY
      </span>

      <h2
        className="font-bebas text-ink leading-tight mb-4"
        style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
      >
        YOUR REQUEST<br />HAS BEEN RECEIVED.
      </h2>

      <p className="font-grotesk text-muted text-base max-w-md leading-relaxed mb-2">
        We'll review your submission and have your professional estimate delivered
        within <strong className="text-ink">48 hours</strong>.
      </p>
      <p className="font-grotesk text-muted text-sm mb-10">
        Check your email for a confirmation.
      </p>

      {/* Next steps mini list */}
      <div
        className="bg-paper border-2 border-ink p-6 text-left w-full max-w-md mb-8"
        style={{ boxShadow: '4px 4px 0 #0B0B0B' }}
      >
        <h4 className="font-bebas text-ink text-lg tracking-widest mb-4">WHAT HAPPENS NEXT</h4>
        {NEXT_STEPS.map((step) => (
          <div key={step.num} className="flex gap-3 mb-4 last:mb-0">
            <span className="font-mono text-muted text-xs font-semibold mt-0.5 flex-shrink-0">
              {step.num}
            </span>
            <div>
              <p className="font-grotesk text-ink text-sm font-semibold">{step.title}</p>
              <p className="font-grotesk text-muted text-xs">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="nb-btn-secondary" id="success-back-home">
        ← BACK TO HOME
      </Link>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN REQUEST PAGE
═══════════════════════════════════════════════════════ */
export default function Request() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFiles = (incoming) => {
    const arr = Array.from(incoming);
    setFiles((prev) => {
      const names = new Set(prev.map((f) => f.name));
      return [...prev, ...arr.filter((f) => !names.has(f.name))];
    });
  };

  const removeFile = (name) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  return (
    <section className="bg-paper min-h-screen pt-20 pb-20" style={{ borderTop: '1px solid #e5e0d8' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatePresence mode="wait">

          {/* ── SUCCESS STATE ── */}
          {submitted && <SuccessState key="success" />}

          {/* ── FORM STATE ── */}
          {!submitted && (
            <motion.div
              key="form"
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              {/* Page header */}
              <div className="mb-10">
                <span className="nb-badge nb-badge-dark mb-4 inline-block" style={{ fontSize: '0.8rem' }}>
                  ESTIMATE REQUEST
                </span>
                <h1
                  className="font-bebas text-ink leading-tight"
                  style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
                >
                  REQUEST YOUR<br />ESTIMATE
                </h1>
                <p className="font-grotesk text-muted text-base mt-3 max-w-lg leading-relaxed">
                  Submit your project details below. We'll review your plans and deliver
                  a professional, bid-ready estimate within 48 hours.
                </p>
              </div>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* ── FORM (2 cols) ── */}
                <form
                  onSubmit={handleSubmit}
                  className="lg:col-span-2"
                  id="estimate-request-form"
                  noValidate
                >
                  <div
                    className="bg-white border-2 border-ink p-8"
                    style={{ boxShadow: '4px 4px 0 #0B0B0B' }}
                  >
                    <div className="flex flex-col gap-5">

                      {/* Full Name */}
                      <Field label="Full Name *" id="field-name">
                        <input
                          id="field-name"
                          type="text"
                          required
                          placeholder="John Smith"
                          className="nb-input"
                          autoComplete="name"
                        />
                      </Field>

                      {/* Company Name */}
                      <Field label="Company Name *" id="field-company">
                        <input
                          id="field-company"
                          type="text"
                          required
                          placeholder="Smith Electrical LLC"
                          className="nb-input"
                          autoComplete="organization"
                        />
                      </Field>

                      {/* Trade Type */}
                      <Field label="Trade Type *" id="field-trade">
                        <select
                          id="field-trade"
                          required
                          className="nb-input"
                          defaultValue=""
                        >
                          <option value="" disabled>Select your trade</option>
                          {TRADES.map((trade) => (
                            <option key={trade} value={trade}>{trade}</option>
                          ))}
                        </select>
                      </Field>

                      {/* Project Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="City *" id="field-city">
                          <input
                            id="field-city"
                            type="text"
                            required
                            placeholder="Dallas"
                            className="nb-input"
                          />
                        </Field>
                        <Field label="State *" id="field-state">
                          <input
                            id="field-state"
                            type="text"
                            required
                            placeholder="TX"
                            maxLength={2}
                            className="nb-input"
                            style={{ textTransform: 'uppercase' }}
                          />
                        </Field>
                      </div>

                      {/* Email */}
                      <Field label="Email Address *" id="field-email">
                        <input
                          id="field-email"
                          type="email"
                          required
                          placeholder="john@smithelectric.com"
                          className="nb-input"
                          autoComplete="email"
                        />
                      </Field>

                      {/* Phone */}
                      <Field label="Phone Number *" id="field-phone">
                        <input
                          id="field-phone"
                          type="tel"
                          required
                          placeholder="Your phone number"
                          className="nb-input"
                          autoComplete="tel"
                        />
                      </Field>

                      {/* Project Description */}
                      <Field label="Project Description *" id="field-description">
                        <textarea
                          id="field-description"
                          rows={5}
                          required
                          placeholder="Describe the project scope, square footage, number of units, or any relevant details that will help us produce an accurate estimate..."
                          className="nb-input resize-none"
                        />
                      </Field>

                      {/* File Upload */}
                      <div>
                        <label className="nb-label">Upload Plans (Optional)</label>
                        <div
                          id="file-dropzone"
                          className={`nb-dropzone ${dragOver ? 'drag-over' : ''}`}
                          onClick={() => fileRef.current?.click()}
                          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                          onDragLeave={() => setDragOver(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setDragOver(false);
                            handleFiles(e.dataTransfer.files);
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label="Upload project plans"
                          onKeyDown={(e) => e.key === 'Enter' && fileRef.current?.click()}
                        >
                          <svg
                            className="mb-3"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            aria-hidden="true"
                          >
                            <rect x="4" y="4" width="24" height="24" stroke="#0B0B0B" strokeWidth="2" />
                            <path d="M16 22v-8M12 18l4-4 4 4" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="square" />
                          </svg>
                          <p className="font-grotesk text-ink text-sm font-semibold">
                            Drop files here or{' '}
                            <span className="underline underline-offset-2">click to browse</span>
                          </p>
                          <p className="font-grotesk text-muted text-xs mt-1">
                            PDF, PNG, JPG, DWG accepted
                          </p>
                          <input
                            ref={fileRef}
                            type="file"
                            accept=".pdf,image/*,.dwg"
                            multiple
                            className="hidden"
                            onChange={(e) => handleFiles(e.target.files)}
                            id="file-input"
                          />
                        </div>

                        {/* File list */}
                        {files.length > 0 && (
                          <div className="mt-3 flex flex-col gap-2">
                            {files.map((file) => (
                              <div
                                key={file.name}
                                className="flex items-center justify-between bg-white border border-ink px-3 py-2"
                              >
                                <span className="font-grotesk text-ink text-xs truncate max-w-xs">
                                  {file.name}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeFile(file.name)}
                                  className="font-grotesk text-muted text-xs hover:text-ink transition-colors ml-4 flex-shrink-0 bg-transparent border-none cursor-pointer"
                                  aria-label={`Remove ${file.name}`}
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Disclaimer */}
                      <p className="font-grotesk text-muted text-xs leading-relaxed">
                        By submitting this form, you agree that Specwise Estimatings LLC will contact
                        you regarding your estimate request. Your information is kept confidential.
                      </p>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="nb-submit mt-2"
                        id="form-submit-button"
                      >
                        SUBMIT ESTIMATE REQUEST →
                      </button>
                    </div>
                  </div>
                </form>

                {/* ── SIDEBAR (1 col) ── */}
                <div className="lg:col-span-1 lg:sticky lg:top-24">
                  <Sidebar />
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
