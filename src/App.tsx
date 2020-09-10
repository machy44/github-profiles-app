import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Hello, Button } from './components/index';
import { theme } from './theme/theme';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hello text="pero" />
      <Button>click me</Button>
      <span>{JSON.stringify(process.env.GITHUB_AUTH_TOKEN)}</span>
    </ThemeProvider>
  );
};

export default App;
