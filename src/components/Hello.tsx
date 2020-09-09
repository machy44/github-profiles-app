import React from 'react';
import { Flex } from './Layout';
import styled, { ThemeProps } from '../theme/theme';

interface HelloProps {
  text: string;
}

const Title = styled.h1(({ theme }: ThemeProps) => {
  return {
    color: theme.colors.primary,
  };
});

const Hello: React.FC<HelloProps> = ({ text }) => {
  return (
    <Flex justifyContent="center">
      <Title>Hello, {text}!</Title>
    </Flex>
  );
};

export default Hello;
