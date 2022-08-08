import './Portfolio.css';
import mooLah from '../../imgs/moolah.jpg';
import spendApp from '../../imgs/spendapp.jpg';
import tickList from '../../imgs/ticklist.jpg';
import { /* useEffect, */ useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
//import useMeasure from 'react-use-measure';

const Portfolio = () => {
  //* Carousel animations
  let [count, setCount] = useState(1);
  //let [ref, { width }] = useMeasure();
  let [tuple, setTuple] = useState([null, count]);

  //* Check which direction element should animate
  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }

  //* check value of previous render
  let prev = tuple[0];

  //* check value from onClick to determine which exit animation
  let direction = count > prev ? 'increasing' : 'decreasing';
  //console.log(direction);

  //* motion element variants
  let portfolioVariants = {
    enter: (direction) => ({ x: direction === 'increasing' ? 500 : -500 }),
    opacity: 0,
    transition: {
      duration: 0.15,
    },
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction === 'increasing' ? -500 : 500,
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    }),
  };

  //* carousel btn controls
  const decrease = () => setCount(count - 1);
  const increase = () => setCount(count + 1);

  //* onScroll animations
  const portCard = useRef(null);
  const isInView = useInView(portCard, { once: true });

  let animate = {
    transform: isInView ? 'none' : 'translateY(400px)',
    opacity: isInView ? 1 : 0.1,
    transition: 'all 0.9s cubic-bezier(0.9, 1, 0.55, 1) 0.2s',
  };

  /* useEffect(() => {
    console.log('Portfolio is in view: ', isInView);
  }, [isInView]); */

  const portImgs = [
    { id: 1, title: 'MooLah', path: mooLah, repo: 'https://github.com/gamgee-em/TipTrackerApp', url:'https://moolah-tip-tracker.herokuapp.com/'  },
    { id: 2, title: 'Budget PWA', path: spendApp, repo: 'https://github.com/gamgee-em/Spend-App', url:'https://thawing-tundra-12672.herokuapp.com/'},
    { id: 3, title: 'Tick List', path: tickList, repo: 'https://github.com/gamgee-em/Tick-List', url:'https://ge-tick-list.herokuapp.com/'},
  ];

  //let currImg = [ mooLah, spendApp, tickList];
  let currImg = `${portImgs[Math.abs(count) % portImgs.length].path}`;
  console.log( currImg)



  return (
    <section ref={portCard} style={animate} className='portfolio-container'>
      <AnimatePresence custom={direction} exitBeforeEnter={true}>
        <motion.div
          key={count}
          variants={portfolioVariants}
          initial={'enter'}
          animate={'center'}
          exit={'exit'}
          custom={direction}
          className='portfolio-card'
        >
          <img
            id='portfolio'
            className='portfolio-img'
             src={`${portImgs[Math.abs(count) % portImgs.length].path}`}
            //src={currImg[Math.abs(count) % portImgs.length]}
            //src={currImg}
            alt='Screenshot of portfolio.'
          />
          <a
            href={portImgs[Math.abs(count) % portImgs.length].url}
            className='app-links'
            target='_blank'
            rel='noreferrer'
          >            
            View
          </a>
        </motion.div>
      </AnimatePresence>
      <div className='controls'>
        <HiChevronLeft onClick={decrease} className='arrows' />
        <HiChevronRight onClick={increase} className='arrows' />
      </div>
    </section>
  );
};

export default Portfolio;
