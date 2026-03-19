import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DiabetesProgram from './pages/DiabetesProgram';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home — programs hub */}
        <Route path="/" element={<Home />} />

        {/* Diabetes program — full LP with its own Navbar */}
        <Route
          path="/diabetes-program"
          element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <DiabetesProgram />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
