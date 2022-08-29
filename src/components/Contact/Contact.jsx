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
        bounce: .25
      }
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: '-45vh',
      x: '-12vw',
    },
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
