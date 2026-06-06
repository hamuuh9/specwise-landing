import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Request from './pages/Request';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg font-inter">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/request" element={<Request />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
