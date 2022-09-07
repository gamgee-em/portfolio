import './Portfolio.css';
import bucketList from '../../imgs/bucketlist.png';
import mooLah from '../../imgs/moolah.png';
import spendApp from '../../imgs/spendapp.png';
import tickList from '../../imgs/ticklist.png';
import employeeCms from '../../imgs/employeecms.png';
import ecommerceApi from '../../imgs/ecommerce.png';
import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Portfolio = () => {
  //* Carousel animations
  let [count, setCount] = useState(1);
  let [img, setImg] = useState([null, count]);

  //* Check which direction element should animate
  if (img[1] !== count) setImg([img[1], count]);

  //* check value of previous render
  let prev = img[0];

  //* check value from onClick to determine which exit animation
  let direction = count > prev ? 'increasing' : 'decreasing';

  //* motion element variants
  const portfolioVariants = {
    enter: (direction) => ({
      x: direction === 'increasing' ? 500 : -500,
    }),
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
        transition: {
          type: 'spring',
          stiffness: 100,
          delay: 0.1,
        },
      });
    }
  }, [isInView, animation]);

  //* images array for carousel
  const portImgs = [
    {
      id: 1,
      title: 'Budget PWA',
      path: spendApp,
      repo: 'https://github.com/gamgee-em/Spend-App',
      url: 'https://thawing-tundra-12672.herokuapp.com/',
    },
    {
      id: 2,
      title: 'MooLah',
      path: mooLah,
      repo: 'https://github.com/gamgee-em/TipTrackerApp',
      url: 'https://moolah-tip-tracker.herokuapp.com/',
    },
    {
      id: 3,
      title: 'Tick List',
      path: tickList,
      repo: 'https://github.com/gamgee-em/Tick-List',
      url: 'https://ge-tick-list.herokuapp.com/',
    },
    {
      id: 4,
      title: 'Bucket List',
      path: bucketList,
      repo: 'https://github.com/gamgee-em/Bucket-List',
      url: 'https://gamgee-em.github.io/Bucket-List/',
    },
    {
      id: 5,
      title: 'Employee CMS',
      path: employeeCms,
      repo: 'https://github.com/gamgee-em/Employee-CMS',
      url: 'https://github.com/gamgee-em/Employee-CMS',
    },
    {
      id: 6,
      title: 'E-Commerce API',
      path: ecommerceApi,
      repo: 'https://github.com/gamgee-em/E-Commerce-ORM',
      url: 'https://github.com/gamgee-em/E-Commerce-ORM',
    },
  ];

  //* current image displayed
  const currImg = `${portImgs[Math.abs(count) % portImgs.length].path}`;

  return (
    <section id='portfolio-container' className='portfolio-container'>
      <motion.div animate={animation} className='portfolio-card'>
        <AnimatePresence custom={direction} exitBeforeEnter={true}>
          <motion.img
            ref={ref}
            variants={portfolioVariants}
            key={count}
            initial={'enter'}
            animate={'center'}
            exit={'exit'}
            custom={direction}
            className='portfolio-img'
            src={currImg}
            alt='Screenshot of portfolio application.'
          />
          <div className='overlay'>
            <h3 className='title'>
              {portImgs[Math.abs(count) % portImgs.length].title}
            </h3>

            <motion.a
              href={portImgs[Math.abs(count) % portImgs.length].url}
              target='_blank'
              rel='noreferrer'
              whileHover={{scale: 1.05}}
            >
              Site
            </motion.a>
            <motion.a
              href={portImgs[Math.abs(count) % portImgs.length].repo}
              target='_blank'
              rel='noreferrer'
              whileHover={{scale: 1.05}}

            >
              Code
            </motion.a>
          </div>
        </AnimatePresence>
      </motion.div>
      <div className='controls'>
        <HiChevronLeft onClick={decrease} className='arrows' />
        <HiChevronRight onClick={increase} className='arrows' />
      </div>
    </section>
  );
};

export default Portfolio;
