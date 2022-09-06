import './NavBar.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

  const resumeVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: '-8vh',
      x: '2.5vw',
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: '-8vh',
      x: '2.5vw',
    },
  };

  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => {
    showResume ? setShowResume(false) : setShowResume(true);
  };

  return (
    <motion.nav
      variants={navContainerVariants}
      initial={'initial'}
      animate={'animate'}
      className={color ? 'nav nav-bg' : 'nav'}
      id='nav-bar'
    >
      <motion.a id='about' variants={navChildVariants} href='#about-container'>
        About
      </motion.a>
      <motion.a id='portfolio' variants={navChildVariants} href='#portfolio-container'>
        Portfolio
      </motion.a>
      <motion.a id='contact' variants={navChildVariants} onClick={handleShowContact()}>
        Contact
      </motion.a>
      <motion.a
      className='resume'
        onClick={handleShowResume}
        variants={navChildVariants}
        id='resume'
      >
        <CgSoftwareDownload />
        Resume
      </motion.a>
      <AnimatePresence>
        {showResume && (
          <motion.div
            variants={resumeVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            className='download-modal'
            whileHover={{backgroundColor:'#008080', scale: 1.1}}
          >
            <motion.a
              className='download'
              href={resumePDF}
              download
              rel='noreferrer'
              target={'_blank'}
            >
              Download
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
