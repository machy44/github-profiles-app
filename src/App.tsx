import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from 'emotion-theming';
import { CURRENT_USER, User, GET_ACC_REPOSITORIES, GET_ACCOUNT } from './api/queries';
import { Layout, Loader } from './common';
import { Global } from '@emotion/core';
import { SearchAccount, Profile, Repositories } from './components';
import { theme, GlobalStyles, Text } from './theme';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  // const { loading: loadingUser, data: userData } = useQuery<User>(CURRENT_USER);
  const [account, setAccount] = useState('');

  const { loading: loadingRepository, data: repositoriesData } = useQuery(GET_ACC_REPOSITORIES, {
    variables: {
      number_of_repos: 5,
      username: account,
    },
  });

  const { loading: loadingAccount, data: accountData } = useQuery(GET_ACCOUNT, {
    variables: {
      username: account,
    },
  });

  console.log('account', account);

  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Loader active={loadingAccount || loadingRepository} />
        <Layout.Flex>
          <Text color="white" fontFamily="inherit">
            Github profiles app
          </Text>
          <SearchAccount submitAccount={setAccount} />
          {/* <span>{JSON.stringify(userData)}</span> */}
          <Profile profileData={accountData} />
          <Repositories data={repositoriesData} />
        </Layout.Flex>
      </ThemeProvider>
    </>
  );
};

export default App;
