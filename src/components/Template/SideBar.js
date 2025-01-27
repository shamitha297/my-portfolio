import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shamitha G Venkat</h2>
        <p>
          <a href="mailto:shamithagvenkat@gmail.com">shamithagvenkat@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shamitha. I am a graduate student at{' '}
        <a href="https://www.colostate.edu/">Colorado State University</a>. I am a researcher at the{' '}
        <a href="https://www.cs.colostate.edu/signal/">SIGNAL Lab</a> and work as a web developer at CSU. I am actively seeking full-time opportunities in software development and AI. Previously, I worked as a Software Engineer at{' '}
        <a href="https://nalsoft.net/">Nalsoft</a>, leading cloud-based enterprise solutions.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Shamitha Gowra <Link to="/">mytobelink.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
