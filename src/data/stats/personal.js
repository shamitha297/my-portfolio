import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-07-29T07:30:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 4,
    // link: 'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Fort Collins, CO',
  },
  {
    key: 'home',
    label: 'Hometown',
    value: 'Guntur, India',
  },
  {
    key: 'languages',
    label: 'Languages',
    value: 'English, Telugu, Hindi, Kannada',
  },
  {
    key: 'hobbies',
    label: 'Interests',
    value: 'Machine Learning, Writing, DIY Projects, Event Organization',
  },
  {
    key: 'fun',
    label: 'Also',
    value: 'My friends call me Sham, you can too, but it’s all real!',
  },
  {
    key: 'showoff',
    label: 'Lines of Javascript powering this website',
    value: '2150',
    link: 'https://github.com/shamitha297/my-portfolio'
  },
];

export default data;
