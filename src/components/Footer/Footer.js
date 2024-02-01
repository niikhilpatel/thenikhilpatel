// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

const Footer = () => {
  return (
    <footer>
      <p>
        <hr />
        <Link to="/">Home</Link> <span className="smallbar">|</span>
        <Link to="/Contact">Contact</Link> <span className="smallbar">|</span>
        <a href="https://leetcode.com/niikhilpatel/" rel="">
          Leetcode
        </a>{' '}
        <span className="smallbar">|</span>
        <a href="https://www.youtube.com/@CodeEnrich">YouTube</a> <span className="smallbar">|</span>
        <a href="https://www.linkedin.com/in/niikhilpatel/" rel="">
          Linkedin
        </a>{' '}
        <span className="smallbar">|</span>
        <a href="https://codepen.io/niikhilpatel">Codepen</a> <span className="smallbar">|</span>
      </p>
    </footer>
  );
};

export default Footer;

