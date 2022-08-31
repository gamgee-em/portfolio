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
      ).then((result) => {
        console.log('Form: ', form);
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
              <button className='submit-btn'> Send </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
