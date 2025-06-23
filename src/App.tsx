import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Themes from './components/Themes';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'themes':
        return <Themes />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <Header currentPage={currentPage} onNavigate={setCurrentPage} />
          <main className="transition-all duration-300">
            {renderPage()}
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;