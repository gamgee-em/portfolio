import './Hero.css';
import { AnimatePresence, motion } from 'framer-motion';
import portraitImg from '../../imgs/portrait.png';

const Hero = () => {
  const heroContainerVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        type: 'spring',
        staggerChildren: 0.15,
        delayChildren: 0.25,
      },
    },
  };

  const heroChildVariants = {
    initial: {
      y: 1100,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.35,
      },
    },
  };

  const heroBtnVariants = {
    initial: {
      y:1100,
    },
    animate: {
      y:0,
      transition: {
        type: 'spring',
        bounce: 0.25,
      },
    }
  }

  return (
    <motion.header
      variants={heroContainerVariants}
      initial={'initial'}
      animate={'animate'}
      className='hero-container'
    >
      <motion.h2 variants={heroChildVariants} className='intro'>
        I'm Sam, a Web Developer and passionate problem solver. I build full
        stack javascript applications
      </motion.h2>
      <motion.img
        variants={heroChildVariants}
        className='portrait'
        src={portraitImg}
        alt='Portrait of Developer'
      />
      <AnimatePresence>
      <motion.a
        /* variants={heroChildVariants} */
        variants={heroBtnVariants}
        href='#about-container'
        className='start-btn'
        whileHover={{scale: 1.05}}
      >
        Start Here
      </motion.a>
      </AnimatePresence>
    </motion.header>
  );
};

export default Hero;
