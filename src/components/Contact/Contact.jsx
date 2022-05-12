import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const messageMaxLength = 1000;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(1000);

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

    if (name.length === 0 && email.length === 0 && message.length === 0) {
      return;
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message, subject }),
    })
      .then(() => {
        alert(
          `Thank you for your message.I'll get back to you very soon! Have a great day!`
        );
      })
      .catch(error => alert(error));
  }

  useEffect(() => {
    function handleMessageCount() {
      const messageLength = message.length;
      const charLeft = messageMaxLength - messageLength;
      setCharCount(charLeft);
    }

    handleMessageCount();
  }, [message]);

  return (
    <section className="section contact bg-grey" id="contact">
      <div className="section-center">
        <div className="section-title contact-title">
          <h2
            className="animate"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            Contact
          </h2>
          <div className="underline"></div>
        </div>

        <div className="contact-center">
          <div className="contact-info animate" data-animate="slideInLeft 2s">
            <h3>Contact Info</h3>
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <svg
                  className="inline-block fill-current mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>

                <span>Address: Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="contact-info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="20"
                  height="20"
                >
                  <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z" />
                </svg>
                <span className="contact-phone">
                  Phone:
                  <a href="tel:+84366270052"> +84 366 270 052</a>
                </span>
              </li>
              <li className="contact-info-item">
                <svg
                  className="inline-block fill-current mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                </svg>
                <span className="contact-email">
                  Email:
                  <a href="mailto:namnguyenthanh.developer@gmail.com">
                    namnguyenthanh.developer@gmail.com
                  </a>
                </span>
              </li>
              <li className="contact-info-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="20"
                  height="20"
                >
                  <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z" />
                </svg>
                <span>
                  Website:
                  <a href="#home"> namdeveloper.netlify.app/</a>
                </span>
              </li>
            </ul>
          </div>

          <div className="contact-form animate" data-animate="slideInRight 2s">
            <h3>Contact Form</h3>
            <form
              data-netlify="true"
              name="contact"
              method="post"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div
                className={`input-container ${
                  name.length >= 1 ? 'focused' : ''
                }`}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <label htmlFor="name">
                  Name: <br />
                </label>
              </div>
              <div
                className={`input-container ${
                  email.length >= 1 ? 'focused' : ''
                }`}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="email">
                  Email: <br />
                </label>
              </div>
              <div
                className={`input-container ${
                  subject.length >= 1 ? 'focused' : ''
                }`}
              >
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
                <label htmlFor="subject">
                  Subject (optional): <br />
                </label>
              </div>
              <div
                className={`input-container ${
                  message.length >= 1 ? 'focused' : ''
                }`}
              >
                <textarea
                  required
                  id="message"
                  name="message"
                  className="form-input"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  maxLength={messageMaxLength}
                ></textarea>
                <label htmlFor="message">
                  Message:
                  <br />{' '}
                </label>
                <small>
                  <span id="message-count">
                    {charCount >= 0 ? charCount : 'Thank you for your message'}
                  </span>{' '}
                  characters
                </small>
              </div>
              <div>
                <button type="submit" className="btn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
