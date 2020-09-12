import React from 'react';
import { Node } from '../api/types';

const Repositories: React.FC<{ repositoriesData: Node[] }> = ({ repositoriesData }) => {
  console.log('repositoriesData', repositoriesData);
  return <div />;
};

export default Repositories;
