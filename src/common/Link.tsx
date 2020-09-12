import React from 'react';

const Link: React.FC<{ href: string; chidlren?: React.ReactNode }> = ({ href, children }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children || href}
    </a>
  );
};

export default Link;
