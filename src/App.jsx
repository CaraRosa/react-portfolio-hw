// import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './components/NavTabs';
import Navigation from './components/Navigation';
import Footer from './components/footer';
import Header from './components/Header';
import React, { useState } from "react";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Project from './components/Project';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import './index.css';

function App() {
  const [pages] = useState([
    {
      name: "about me",
    },
    {
      name: "contact"
    },
    {
      name: 'portfolio'
    },
    {
      name: 'resume',
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <>
      <div>
        <Navigation />
        <Header />
        <main className="mx-3">
          <Routes>
            <Route path="*" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </>
    
  );
}

export default App;