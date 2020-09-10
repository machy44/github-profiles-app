type Theme = {
  colors: {
    primary: string;
    background: string;
  };
};

export type ThemeProps<T = {}> = T & { theme: Theme };

export const theme: Theme = {
  colors: {
    primary: 'red',
    background: 'black',
  },
};
