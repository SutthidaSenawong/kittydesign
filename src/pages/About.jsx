import React from 'react';
// import ProfileImg from '../assets/Fah.jpeg';

export default function About() {
  const recipientEmail = 'sutthida.sen@gmail.com';
  return (
    <div className="about-container">
      <div className="img-container">
        <img src="Fah.jpeg" className="about-img" />
      </div>
      <div className="about-text">
        <h1>Hello there! My name is Fah</h1>
        <p>
          A passionate junior front-end developer excited about crafting unique
          and engaging websites. While I may be a junior, I'm dedicated to
          honing my skills and I will deliver top-notch results. I promise to
          give you the best shot to make your special website a reality.
          <br />{' '}
          <span>Let's collaborate and create something special together!</span>
        </p>
        <a
          href={`mailto:${recipientEmail}?body=Dear Sutthida,`}
          className="email-btn"
        >
          <i className="fa-solid fa-envelope"></i>Email
        </a>
      </div>
    </div>
  );
}
