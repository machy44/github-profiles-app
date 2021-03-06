import { css } from '@emotion/core';
import { Theme as StyledTheme } from 'styled-system';

export * as Layout from './Layout';

export { Text } from './typography';

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
  body {
    background: #444448;
  }
  body > div {
    height: 100%;
  }
  body,
  span,
  input,
  div,
  button {
    font-family: Quicksand, sans-serif !important;
  }
`;

export type Theme = {
  colors: {
    primary: string;
    background: string;
    text: string;
  };
} & Omit<StyledTheme, 'colors'>;

export type ThemeProps<T = {}> = T & { theme: Theme };

export const theme: Theme = {
  colors: {
    primary: '#f0e',
    // background: '#1B1C1D',
    background: '#444448',
    text: '#ffffff',
  },
  breakpoints: ['40em', '52em', '64em'],
  space: {
    xs: 0,
    sm: 8,
    md: 16,
    lg: 32,
  },
  letterSpacings: [1, 2, 3],
  fontSizes: [12, 14, 16, 20, 32],
  fontWeights: [500, 600, 700],
};
