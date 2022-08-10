import './Hero.css';
import { motion } from 'framer-motion';
import portraitImg from '../../imgs/portrait.png';

const Hero = () => {
  //? look into framer-motion staggerChildren to reduce variants
  const introAnimate = {
    offScreen: {
      y: 1100,
      opacity: 0,
      scale: 0.75,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.25,
        ease: [0, 0.7, 0.3, 1],
      },
    },
  };

  const imgAnimate = {
    offScreen: {
      y: 1100,
      opacity: 0.1,
      scale: 0.75,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0, 0.7, 0.3, 1],
      },
    },
  };

  const btnAnimate = {
    offScreen: {
      y: 1100,
      opacity: 0.1,
      scale: 0.75,
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
    <header className='hero-container'>
      <motion.h2
        variants={introAnimate}
        initial={'offScreen'}
        animate={'onScreen'}
        className='intro'
      >
        I'm Sam, a Web Developer and passionate problem solver{/*  living in
        Highland, NY */}. I build full stack javascript applications
      </motion.h2>
      <motion.img
        variants={imgAnimate}
        initial={'offScreen'}
        animate={'onScreen'}
        className='portrait'
        src={portraitImg}
        alt='Portrait of Developer'
      />
      <motion.a
        variants={btnAnimate}
        initial={'offScreen'}
        animate={'onScreen'}
        href='#about'
        className='start-btn'
      >
        Start Here
      </motion.a>
    </header>
  );
};

export default Hero;
