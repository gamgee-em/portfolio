import './Footer.css';
import { TiSocialLinkedin } from 'react-icons/ti';
import { GoMarkGithub } from 'react-icons/go';

const Footer = () => {
  return (
    <footer>
      <p className='copywrite'> &copy; Sam Sweigart </p>
      <div className='social-icons'>
        <a
          href='https://linkedin.com/in/sam-sweigart'
          target='_blank'
          rel='noreferrer'
        >
          <TiSocialLinkedin className='linked-in' />
        </a>
        <a href='https://github.com/gamgee-em' target='_blank' rel='noreferrer'>
          <GoMarkGithub className='github' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
