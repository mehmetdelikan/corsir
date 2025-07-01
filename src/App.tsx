import { useState, useEffect } from 'react';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import Hizmetler from './components/Hizmetler';
import Portfolyo from './components/Portfolyo';
import Hakkimizda from './components/Hakkimizda';
import Iletisim from './components/Iletisim';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <>
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <Hizmetler />
        <Portfolyo />
        <Hakkimizda />
        <Iletisim />
      </main>
      <Footer />
    </>
  );
}

export default App;