import './NavBar.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import resumePDF from './resume-sam-sweigart.pdf';
import { CgSoftwareDownload } from 'react-icons/cg';

const NavBar = ({ handleShowContact }) => {
  const [color, setColor] = useState(false);
  const handleNavBg = () =>
    window.scrollY >= 150 ? setColor(true) : setColor(false);

  window.addEventListener('scroll', handleNavBg);

  const navContainerVariants = {
    initial: {
      y: -700,
    },
    animate: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.35,
      },
    },
  };

  const navChildVariants = {
    intial: {
      y: 0,
      opacity: 0,
      scale: 0.75,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.nav
      variants={navContainerVariants}
      initial={'initial'}
      animate={'animate'}
      className={color ? 'nav nav-bg' : 'nav'}
      id='nav-bar'
    >
      <motion.a variants={navChildVariants} href='#about'>
        About
      </motion.a>
      <motion.a variants={navChildVariants} href='#portfolio'>
        Portfolio
      </motion.a>
      <motion.a variants={navChildVariants} onClick={handleShowContact()}>
        Contact
      </motion.a>
      <motion.a
        variants={navChildVariants}
        href={resumePDF}
        download
        id='cv'
        rel='noreferrer'
        target={'_blank'}
      >
        <CgSoftwareDownload />
        Resume
      </motion.a>
    </motion.nav>
  );
};

export default NavBar;
