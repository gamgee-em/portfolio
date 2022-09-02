import About from './components/About/About';
import Background from './components/Background/Background';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => {
    return () =>  showContact ? setShowContact(false) : setShowContact(true);
    
  };

  return (
    <div className='wrapper'>
      <Background />
      <NavBar handleShowContact={handleShowContact} />
      <Hero />
      <About />
      <Portfolio />
      <Contact
        setShowContact={setShowContact}
        showContact={showContact}
        handleShowContact={handleShowContact}
      />
      <Footer />
    </div>
  );
}

export default App;
