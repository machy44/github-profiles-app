import React from 'react';
import styled from '@emotion/styled';
import { Flex } from './Layout';

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
