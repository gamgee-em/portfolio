import './About.css';
import { useEffect, useRef } from 'react';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from 'framer-motion';

const About = () => {
  const animation = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          bounce: 0.35,
        },
      });
    } else if (!isInView) {
      animation.start({
        y: 100,
        opacity: 0,
        scale: 0.75,
      });
    }
  }, [isInView, animation]);

  const text = `Welcome to my portfolio! I'm Sam Sweigart, a full stack web developer
  and avid rock climber currently residing in Highland, NY. In 2019 I
  began learning HTML and CSS, later followed by JavaScript and became
  quickly enamored with the craft. Shortly after, I enrolled in the
  University of Pennsylvania's Full Stack Web Development Program and
  received a certificate upon completion. Since then, I have been
  actively expanding my skill set and building applications. I'm always
  looking for fellow developers to collaborate with, so please do not
  hesitate to reach out!`

  return (
    <section id='about-container' className='about-container'>
      <AnimatePresence>
        <motion.p ref={ref} className='about' animate={animation}>
          {text}
        </motion.p>
      </AnimatePresence>
    </section>
  );
};

export default About;
