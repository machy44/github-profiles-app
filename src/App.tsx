import React from 'react';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from 'emotion-theming';
import { CURRENT_USER, User } from './api/queries';
import { Layout } from './common';
import { Global } from '@emotion/core';
import { SearchAccount, Profile } from './components';
import { theme, GlobalStyles, Text } from './theme';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const { loading, data } = useQuery<User>(CURRENT_USER);
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Layout.Flex>
          <Text color="white" fontFamily="inherit">
            Github profiles app
          </Text>
          <SearchAccount />
          <Profile />
        </Layout.Flex>
      </ThemeProvider>
    </>
  );
};

export default App;
