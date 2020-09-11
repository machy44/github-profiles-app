import { Theme as StyledTheme } from 'styled-system';

type Theme = {
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
    background: '#1B1C1D',
    text: '#ffffff',
  },
  breakpoints: ['40em', '52em', '64em'],
  space: {
    small: 4,
    medium: 8,
    large: 16,
  },
};
