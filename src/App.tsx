import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Hello from './components/Hello';
import { theme } from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hello text="pero" />
    </ThemeProvider>
  );
};

export default App;
