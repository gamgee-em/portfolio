import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => () =>
    showContact ? setShowContact(false) : setShowContact(true);

  const contactModalVariants = {
    initial: {
      opacity: 0,
      scale: .1,
      y: '35vh',
      x: '40vw',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
     
    },
    exit: {
      opacity: 0,
      scale: .1,
      y: '35vh',
      x: '40vw',
    },
    
  };

  return (
    <>
      <button className='contact-btn' onClick={handleShowContact()}>
        Contact
      </button>
      <AnimatePresence exitBeforeEnter={true}>
        {showContact && (
          <motion.section
            className='contact'
            variants={contactModalVariants}
            initial='initial'
            animate='visible'
            exit='exit'
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
              type='text'
              name='email'
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
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
