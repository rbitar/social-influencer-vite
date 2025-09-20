import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '@/components/Home';
import About from './components/About';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <nav className="bg-white p-4">
          <div className="max-w-6xl mx-auto text-center">
            <Link to="/" className="text-black hover:text-gray-600 font-mono text-sm mr-2">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-gray-600 font-mono text-sm ml-2">
              About
            </Link>
          </div>
        </nav>

        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;