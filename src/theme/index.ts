import { css } from '@emotion/core';
import { Theme as StyledTheme } from 'styled-system';

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital@1&display=swap');
  body {
    background: #444448;
  }
  body > div {
    height: 100%;
  }
  body,
  span,
  input,
  button {
    font-family: Rubik, sans-serif !important;
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
    small: 4,
    medium: 8,
    large: 16,
  },
};
