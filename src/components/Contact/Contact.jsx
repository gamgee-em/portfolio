import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => () =>
    showContact ? setShowContact(false) : setShowContact(true);

  return (
    <>
      <button className='contact-btn' onClick={handleShowContact()}>
        Contact
      </button>

      {showContact && (
        <section className='contact'>
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
        </section>
      )}
    </>
  );
};

export default Contact;
