import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';
import Navigation from './components/Navigation';
import Footer from './components/footer';
import Header from './components/Header';
import React, { useState } from "react";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';

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
    < Navigation
      className="App-navigation"
      setCurrentPage = {setCurrentPage}
      currentPage={currentPage}
      pages={pages}
      />

    <Header />
    <main className='mx-3'>
      <Outlet />
    </main> 
    <Footer />
    </>
  );
}

export default App;