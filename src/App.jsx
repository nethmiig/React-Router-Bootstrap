import React, { useState } from 'react';
import Navigation from './Navbar';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <Navigation onPageChange={handlePageChange} />
      {activePage === 'home' && <Home />}
      {activePage === 'blogs' && <Blogs />}
      {activePage === 'contact' && <Contact />}
    </div>
  );
}

export default App;