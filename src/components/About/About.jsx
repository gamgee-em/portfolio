import './About.css';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let animate = {
    transform: isInView ? 'none' : 'translateY(200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
  };

  return (
    <section id='about' className='about-container'>
      <p ref={ref} className='about' style={animate}>
        Welcome to my portfolio! I'm Sam Sweigart, a full stack web developer
        and avid rock climber currently residing in Highland, NY. In 2019 I
        began learning HTML and CSS, later followed by JavaScript and became
        quickly enamored with the craft. Shortly after, I enrolled in the
        University of Pennsylvania's Full Stack Web Development Program and
        received a certificate upon completion. Since then, I have been actively
        expanding my skill set and building applications. I'm always looking for
        fellow developers to collaborate with, so please do not hesitate to
        reach out!
      </p>
    </section>
  );
};

export default About;
