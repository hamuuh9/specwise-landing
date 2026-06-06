import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg border-b border-border-nav">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bebas text-accent text-2xl tracking-wider no-underline">
          SPECWISE ESTIMATIONS
        </Link>
        <Link
          to="/request"
          className="bg-accent text-bg font-bebas text-lg px-6 py-2 tracking-wide hover:bg-yellow-400 transition-colors duration-200 no-underline"
        >
          GET FREE ESTIMATE
        </Link>
      </div>
    </nav>
  );
}
