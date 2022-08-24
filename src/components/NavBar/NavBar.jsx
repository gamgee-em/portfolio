import './NavBar.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import resumePDF from './resume-sam-sweigart.pdf';
import { CgSoftwareDownload } from 'react-icons/cg';

const NavBar = () => {
  const [color, setColor] = useState(false);
  const handleNavBg = () => window.scrollY >= 150 ? setColor(true) : setColor(false);

  window.addEventListener('scroll', handleNavBg);

  const navAnimate = {
    offScreen: {
      y: -100,
      opacity: 0.1,
      scale: 1,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0, 0.7, 0.3, 1],
      },
    },
  };


  return (
    <motion.nav
      className={color ? 'nav nav-bg' : 'nav'}
      variants={navAnimate}
      initial={'offScreen'}
      animate={'onScreen'}
      id='nav-bar'
    >
      <a href='#about'> About </a>
      <a href='#portfolio'> Portfolio </a>
      <a href='mailto:samuel.sweigart@gmail.com'> Contact </a>
      <a href={resumePDF} download id='cv' rel='noreferrer' target={'_blank'}>
        <CgSoftwareDownload /> Resume
      </a>
    </motion.nav>
  );
};

export default NavBar;
