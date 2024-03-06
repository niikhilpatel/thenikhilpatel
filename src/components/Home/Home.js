import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <section>
      <h1 className="nikhil">Nikhil!</h1>
      <p>
        Hi there, I'm <span className="nikhil">Nikhil Patel</span>! <br />
        I'm in{' '}
        <a href="https://en.wikipedia.org/wiki/Jabalpur" target="_blank" rel="noopener noreferrer">
          Jabalpur
        </a>
        ,{' '}
        <a href="https://en.wikipedia.org/wiki/India" target="_blank" rel="noopener noreferrer">
          INDIA
        </a>{' '}
        and lately I focus on contribution to GitHub and working as an AI developer as well as pursuing a Bachelor's Degree in Computer Science.
        <br />
      </p>

      <p>
        If you want to check some of my stuff out then you can do that!
        <ul>
          <li>
            <a href="https://github.com/niikhilpatel" target="_blank" rel="noopener noreferrer">
              GitHub profile
            </a>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            Chatbots
            <a href="https://niikhilpatel.github.io/Messenger-Chatbot/" target="_blank" rel="noopener noreferrer">
              Messenger
            </a>
          </li>
          <li>
            Browser add-ons <a href="Extension.html">Random Jokes</a>
          </li>
        </ul>
      </p>

      <noscript>
        So sorry for the trouble, but you need JavaScript enabled to view my email! <br />
        You can also see it by viewing the source of this page or by visiting my GitHub profile!
      </noscript>

      <script src="script.js" async defer></script>
      <a href="mailto:nikhilpatel4353@gmail.com?subject=Feedback&body=Message">nikhilpatel4353@gmail.com</a>
      <p>Or you can leave a message with my <a href="contact.js">Contact form</a>!</p>

      <details>
        <summary style={{ color: 'rgb(227, 145, 115)', cursor: 'pointer' }}>Click to read on...</summary>

        <p>If you're still reading, that must mean you're really interested in me. I'm flattered.</p>

        <p>
          Last I checked I was 23 years old, and I am currently looking for work. <br />
          I spend a lot of my spare time messing about with pieces of technology and managing/moderating online communities.
          <br />
          <br />
          I have been known to play video games occasionally, but it has to be something special to hold my attention!
        </p>

        <p>
          I feel very passionate about helping people out where possible and doing small things to make other people's lives easier and more fun!
          I usually try to achieve this through my software creations, which you can find on my GitHub profile!
        </p>

        <p>
          If you think I can help with anything, want me to join your project team, or just want to say hi, please send me an email! <br />
          I welcome all friendly communication!
        </p>
      </details>
    </section>
  );
};

export default Home;
