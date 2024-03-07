import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="contact__form">
        <form>
          <div className="form__name">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

