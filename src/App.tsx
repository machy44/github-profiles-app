import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from 'emotion-theming';
import { CURRENT_USER, GET_ACC_REPOSITORIES, GET_ACCOUNT } from './api/queries';
import { Account, AccountVars, RepositoriesData, RepositoriesVars, Node } from './api/types';
import { sortByName } from './utils';
import { Loader, SecondaryButton } from './common';
import { Layout } from './theme';
import { Global } from '@emotion/core';
import { Container } from 'semantic-ui-react';
import { Item, Card, Icon } from 'semantic-ui-react';
import { SearchAccount, Profile, Repositories } from './components';
import { theme, GlobalStyles, Text } from './theme';

import 'semantic-ui-css/semantic.min.css';

const { Flex, Grid, Box } = Layout;

const App = () => {
  // const { loading: loadingUser, data: userData } = useQuery<User>(CURRENT_USER);
  const [account, setAccount] = useState('');
  const [isSorted, setIsSorted] = useState<boolean>(false);

  const { loading: loadingRepository, data: repositoriesResponse } = useQuery<RepositoriesData, RepositoriesVars>(
    GET_ACC_REPOSITORIES,
    {
      variables: {
        number_of_repos: 15,
        username: account,
      },
    },
  );

  const { loading: loadingAccount, data: accountResponse } = useQuery<Account, AccountVars>(GET_ACCOUNT, {
    variables: {
      username: account,
    },
  });

  // dont mutate original array
  let repositories = [...(repositoriesResponse?.user.repositories.nodes || [])];

  repositories = isSorted ? repositories.sort(sortByName) : repositories;

  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Flex flexDirection="column" p={['xs', 'sm', 'md', 'lg']} mx="auto" alignItems="center">
          <Loader active={loadingAccount || loadingRepository} />
          <Text fontSize={[3, 4]} color="white" fontFamily="inherit" textAlign="center" letterSpacing={[1, 2]}>
            Github profiles app
          </Text>
          <SearchAccount submitAccount={setAccount} />
          <Grid gridTemplateColumns="auto 1fr auto" gridGap={['sm', 'md', 'lg']} mt={['sm', 'md', 'lg']}>
            {accountResponse ? (
              <Box justifySelf="start">
                <Profile profileData={accountResponse.user} />
              </Box>
            ) : null}
            {repositories.length ? (
              <Repositories repositoriesData={repositories} handleSort={setIsSorted} isSorted={isSorted} />
            ) : null}
          </Grid>
        </Flex>
      </ThemeProvider>
    </>
  );
};

export default App;
