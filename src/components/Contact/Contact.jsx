import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import './Contact.css';

const Contact = ({ showContact }) => {
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

  const form = useRef();

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      ).then((result) => {
          console.log(result.text);
        },(error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
            <form
              ref={form}
              onSubmit={handleEmailSubmit}
              className='contact-form'
              action='/send_email'
              method='post'
            >
              <h2>Get in touch...</h2>
              <input
                className='fname'
                type='text'
                name='fname'
                placeholder='First Name'
              />
              <input
                className='lname'
                type='text'
                name='lname'
                placeholder='Last Name'
              />
              <input
                className='email'
                type='email'
                name='from'
                placeholder='Your E-mail'
              />
              <input
                className='subject'
                type='text'
                name='subject'
                placeholder='Subject'
              />

              <textarea
                className='message'
                type='text'
                name='message'
                placeholder='Type your message here... 📬'
              />
              <button className='submit-btn'> Send </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
