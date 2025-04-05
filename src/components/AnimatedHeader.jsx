import React, { useState, useEffect } from 'react';

const roles = [
  'Fintech Developer',
  'Algo Trader',
  'Machine Learning Architect',
];

export default function AnimatedHeader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header data-aos="fade-down">
      <h1>DJ Martin</h1>
      <p style={{ color: '#a3ffcc' }}>{roles[index]}</p>
    </header>
  );
}
