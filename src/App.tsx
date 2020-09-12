import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from 'emotion-theming';
import { CURRENT_USER, GET_ACC_REPOSITORIES, GET_ACCOUNT } from './api/queries';
import { Account, AccountVars } from './api/types';
import { Loader } from './common';
import { Layout } from './theme';
import { Global } from '@emotion/core';
import { Container } from 'semantic-ui-react';
import { SearchAccount, Profile, Repositories } from './components';
import { theme, GlobalStyles, Text } from './theme';

import 'semantic-ui-css/semantic.min.css';

const { Flex } = Layout;

const App = () => {
  // const { loading: loadingUser, data: userData } = useQuery<User>(CURRENT_USER);
  const [account, setAccount] = useState('');

  const { loading: loadingRepository, data: repositoriesData } = useQuery(GET_ACC_REPOSITORIES, {
    variables: {
      number_of_repos: 5,
      username: account,
    },
  });

  const { loading: loadingAccount, data: accountResponse } = useQuery<Account, AccountVars>(GET_ACCOUNT, {
    variables: {
      username: account,
    },
  });

  console.log('accountData', accountResponse);

  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Flex flexDirection="column">
          <Loader active={loadingAccount || loadingRepository} />
          <Text fontSize={[2, 3, 4]} color="white" fontFamily="inherit" textAlign="center">
            Github profiles app
          </Text>
          <SearchAccount submitAccount={setAccount} />
          {/* <span>{JSON.stringify(userData)}</span> */}
          {accountResponse ? <Profile profileData={accountResponse.user} /> : null}
          {/* <Repositories data={repositoriesData} /> */}
        </Flex>
      </ThemeProvider>
    </>
  );
};

export default App;
