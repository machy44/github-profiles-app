import React from 'react';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from 'emotion-theming';
import { CURRENT_USER, User } from './api/queries';
import { Layout } from './common';
import { Global } from '@emotion/core';
import Repository from './components/Repository';
import { theme, GlobalStyles } from './theme';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const { loading, data } = useQuery<User>(CURRENT_USER);
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Layout.Flex>
          <Repository />
          {/* <Profile /> */}
        </Layout.Flex>
      </ThemeProvider>
    </>
  );
};

export default App;
