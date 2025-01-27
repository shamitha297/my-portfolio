import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => {
  const messages = [
    'Hello, You Look Great Here!',
    'Let\'s Make Magic Happen!',
    'Hey There, Stay Awhile!',
    'Glad You’re Here!',
    'You’ve Arrived at Something Awesome!',
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => {
        const currentIndex = messages.indexOf(prevMessage);
        return messages[(currentIndex + 1) % messages.length];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Main
      description={
        'Shamitha Venkat\'s personal website. Computer Science Graduate Student, Researcher at SIGNAL and HCAI labs @ Colorado State University.'
      }
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">{currentMessage}</Link>
            </h2>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to click around any sections that interest you.{' '}
          Here you can know more <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link> or{' '}
          <Link to="/contact">contact</Link> me. If you are into numbers then check out the {' '}
          <Link to="/stats">stats</Link> section.
        </p>
        <p>
          {' '}
          Source available{' '}
          <a href="https://github.com/shamitha297/my-portfolio">here</a>.
        </p>
      </article>
    </Main>
  );
};

export default Index;
