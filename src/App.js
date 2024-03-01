import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;