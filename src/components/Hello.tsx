import React from 'react';

interface HelloProps {
  text: string;
}

const Hello: React.FC<HelloProps> = ({ text }) => {
  return <h1>Hello, {text}!</h1>;
};

export default Hello;
