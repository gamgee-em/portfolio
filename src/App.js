import About from './components/About/About';
import Background from './components/Background/Background';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
//import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Background />
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      {/*  <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
