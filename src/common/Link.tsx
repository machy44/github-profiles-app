import React from 'react';

const Link: React.FC<{ url: string }> = ({ url }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      {url}
    </a>
  );
};

export default Link;
