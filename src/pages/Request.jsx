import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const inputClasses =
  'w-full bg-bg-card border border-border text-white font-inter text-sm px-4 py-3 placeholder:text-text-secondary focus:border-accent transition-colors duration-200';

export default function Request() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFileName(e.dataTransfer.files[0].name);
      if (fileRef.current) {
        fileRef.current.files = e.dataTransfer.files;
      }
    }
  };

  return (
    <section className="bg-bg min-h-screen pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className="font-bebas text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(40px, 6vw, 56px)' }}
              >
                REQUEST YOUR FREE ESTIMATE
              </h1>
              <p className="font-inter text-text-secondary text-base mb-10 leading-relaxed">
                We'll deliver your sample estimate within 48 hours. No payment, no commitment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block font-inter text-text-secondary text-xs uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    className={inputClasses}
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block font-inter text-text-secondary text-xs uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Smith Electrical LLC"
                    className={inputClasses}
                  />
                </div>

                {/* Trade Type */}
                <div>
                  <label className="block font-inter text-text-secondary text-xs uppercase tracking-wider mb-2">
                    Trade Type
                  </label>
                  <select required className={inputClasses} defaultValue="">
                    <option value="" disabled>
                      Select your trade
                    </option>
                    {TRADES.map((trade) => (
                      <option key={trade} value={trade}>
                        {trade}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-text-secondary text-xs uppercase tracking-wider mb-2">
                      Project Location — City
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Los Angeles"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-text-secondary text-xs uppercase tracking-wider mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="CA"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block font-inter text-text-secondary text-xs uppercase tracking-wider mb-2">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the project scope, size, and any relevant details..."
                    className={inputClasses + ' resize-none'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-inter text-text-secondary text-xs uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@smithelectric.com"
                    className={inputClasses}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-inter text-text-secondary text-xs uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className={inputClasses}
                  />
                </div>

                {/* Upload Plans */}
                <div>
                  <label className="block font-inter text-text-secondary text-xs uppercase tracking-wider mb-2">
                    Upload Plans (Optional)
                  </label>
                  <div
                    className="dropzone flex flex-col items-center justify-center py-8 px-4 cursor-pointer"
                    onClick={() => fileRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                  >
                    <svg
                      className="w-8 h-8 text-accent mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="font-inter text-text-secondary text-sm">
                      {fileName || 'Drop plans here or click to upload (optional)'}
                    </p>
                    <p className="font-inter text-text-secondary text-xs mt-1 opacity-60">
                      PDF, PNG, JPG accepted
                    </p>
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-accent text-bg font-bebas text-xl tracking-wide py-4 hover:bg-yellow-400 transition-colors duration-200 mt-4"
                >
                  SUBMIT REQUEST
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="flex flex-col items-center justify-center min-h-[60vh] text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Checkmark icon */}
              <div className="w-20 h-20 border-[3px] border-accent flex items-center justify-center mb-8">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2
                className="font-bebas text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
              >
                YOUR REQUEST HAS BEEN RECEIVED.
                <br />
                WE'LL DELIVER YOUR ESTIMATE WITHIN 48 HOURS.
              </h2>
              <p className="font-inter text-text-secondary text-base mt-4">
                Check your email for a confirmation. We'll be in touch soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
