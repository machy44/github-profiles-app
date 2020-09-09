import React from 'react';
import { Flex } from './Layout';
import styled from '../theme/theme';

interface HelloProps {
  text: string;
}

const Title = styled.h1({
  color: 'red',
});

const Hello: React.FC<HelloProps> = ({ text }) => {
  return (
    <Flex justifyContent="center">
      <Title>Hello, {text}!</Title>
    </Flex>
  );
};

export default Hello;
