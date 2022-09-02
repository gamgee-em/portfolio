import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
//! icons https://react-icons.github.io/react-icons
import { TiSocialLinkedin } from 'react-icons/ti';
import { GoMarkGithub } from 'react-icons/go';
import { FaTimesCircle } from 'react-icons/fa';

const Contact = ({ setShowContact, showContact, handleShowContact }) => {
  const contactModalVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: '-50vh',
      x: '-12vw',
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
      y: '-45vh',
      x: '-12vw',
    },
  };

  const sentVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  //* emailjs contact form submit
  const form = useRef();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result, error) => {
        if (result.status === 200) {
          console.log(result.text);
        } else {
          console.log(error.text);
        }
      })
      .then(() => {
        setEmailSent(true);
      })
      .then(() => {
        setTimeout(() => {
          setShowContact(false);
          setEmailSent(false);
          e.target.reset();
        }, 2500);
      });
  };

  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      <AnimatePresence exitBeforeEnter={true}>
        {showContact && (
          <motion.section
            className='contact'
            variants={contactModalVariants}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <FaTimesCircle
              onClick={handleShowContact(setEmailSent)}
              className='close'
            />
            <form
              ref={form}
              onSubmit={handleEmailSubmit}
              className='contact-form'
            >
              <h2>Get in touch...</h2>
              <input
                className='fname'
                type='text'
                minLength='2'
                maxLength='25'
                name='fname'
                placeholder='First Name'
                required
              />
              <input
                className='lname'
                type='text'
                minLength='2'
                maxLength='25'
                name='lname'
                placeholder='Last Name'
                required
              />
              <input
                className='email'
                type='email'
                name='from'
                placeholder='Your E-mail'
                required
              />
              <input
                className='subject'
                type='text'
                minLength='2'
                maxLength='50'
                name='subject'
                placeholder='Subject'
                required
              />

              <textarea
                className='message'
                type='text'
                name='message'
                minLength='2'
                maxLength='250'
                placeholder='Type your message here... 📬'
                required
              />
              <div className='social-icons'>
                <a
                  href='https://github.com/gamgee-em'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GoMarkGithub className='github' />
                </a>
                <a
                  href='https://linkedin.com/in/sam-sweigart'
                  target='_blank'
                  rel='noreferrer'
                >
                  <TiSocialLinkedin className='linked-in' />
                </a>
              </div>
              <button className='submit-btn'> Send </button>
              {emailSent && (
                <motion.div
                  variants={sentVariants}
                  initial={'initial'}
                  animate={'animate'}
                  transition={{ duration: 1.5 }}
                  className='email-sent'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x={'0px'}
                    y={'0px'}
                    viewBox='0 0 26 26'
                  >
                    <path d='M 13 1 C 6.382813 1 1 6.382813 1 13 C 1 19.617188 6.382813 25 13 25 C 19.617188 25 25 19.617188 25 13 C 25 6.382813 19.617188 1 13 1 Z M 13 3 C 18.535156 3 23 7.464844 23 13 C 23 18.535156 18.535156 23 13 23 C 7.464844 23 3 18.535156 3 13 C 3 7.464844 7.464844 3 13 3 Z M 17.1875 7.0625 C 17.039063 7.085938 16.914063 7.164063 16.8125 7.3125 L 11.90625 14.59375 L 9.59375 12.3125 C 9.394531 12.011719 9.011719 11.988281 8.8125 12.1875 L 7.90625 13.09375 C 7.707031 13.394531 7.707031 13.800781 7.90625 14 L 11.40625 17.5 C 11.605469 17.601563 11.886719 17.8125 12.1875 17.8125 C 12.386719 17.8125 12.707031 17.707031 12.90625 17.40625 L 18.90625 8.59375 C 19.105469 8.292969 18.992188 8.011719 18.59375 7.8125 L 17.59375 7.09375 C 17.492188 7.042969 17.335938 7.039063 17.1875 7.0625 Z'></path>
                  </svg>
                  <div>
                    <h3>Message Sent!</h3>
                    <h6>
                      Please check your e-mail <br /> for confirmation
                    </h6>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
