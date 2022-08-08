import './Background.css';
import { useState , useEffect } from 'react';
import mainBgImg from '../../imgs/mainbg.jpg';

const Background = () => {
  const [offSetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    /* console.log('scrolling'); */
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <img
      src={mainBgImg}
      className='background'
      style={{ transform: `translateY(-${offSetY * 0.25}px)` }}
      alt='Raindrops rippling on a puddle that is reflecting city stree lights'
    />
  );
};

export default Background;
