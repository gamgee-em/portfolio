import './About.css';
import { useRef/* , useEffect */ } from 'react';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

/*   useEffect(() => {
    console.log('About is in view: ', isInView);
  }, [isInView]); */

  let animate = {
    transform: isInView ? 'none' : 'translateY(200px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
  };

  return (
    <section id='about' className='about-container'>
      <p ref={ref} className='about' style={animate}>
        Welcome to my portfolio page. My name is Sam Sweigart. I currently
        reside in Highland, NY and identify as a Full Stack Web Developer. In my
        search for a new career in 2019, I began exploring HTML and CSS. As someone who
        has a near insatiable curiosity for information and problem solving, I
        quickly knew that Web Development was something I wanted to pursue.
        Thank you for stopping by my page and taking the time to get to know me
        a bit better. This space will continue to be a work in progress as I
        polish my current skills and expand my scope into other aspects of Web
        Development. Please check back regularly, as I would love to hear any
        feedback you may have to offer.
      </p>
    </section>
  );
};

export default About;
