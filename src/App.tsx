import React from 'react';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from 'emotion-theming';
import { CURRENT_USER, User } from './api/queries';
import { Loader, Layout } from './common';
import { theme } from './theme';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const { loading, data } = useQuery<User>(CURRENT_USER);
  return (
    <ThemeProvider theme={theme}>
      <Layout.Box>
        <Loader active={loading} />
        <span>{JSON.stringify(data)}</span>
      </Layout.Box>
    </ThemeProvider>
  );
};

export default App;
