import React from 'react';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from 'emotion-theming';
import { CURRENT_USER, User, GET_ACC_REPOSITORIES } from './api/queries';
import { Layout } from './common';
import { Global } from '@emotion/core';
import { SearchAccount, Profile, Repositories } from './components';
import { theme, GlobalStyles, Text } from './theme';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const { loading: loadingUser, data: userData } = useQuery<User>(CURRENT_USER);
  const { loading: loadingRepository, data: repositoriesData } = useQuery(GET_ACC_REPOSITORIES, {
    variables: {
      number_of_repos: 5,
    },
  });

  if (loadingUser || loadingRepository) return <div>Loading</div>;
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Layout.Flex>
          <Text color="white" fontFamily="inherit">
            Github profiles app
          </Text>
          <SearchAccount />
          <span>{JSON.stringify(userData)}</span>
          {/* <Profile /> */}
          <Repositories data={repositoriesData} />
        </Layout.Flex>
      </ThemeProvider>
    </>
  );
};

export default App;
