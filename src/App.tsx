import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { Icon } from 'semantic-ui-react';
import { CURRENT_USER, GET_ACC_REPOSITORIES, GET_ACCOUNT, TEST } from './api/queries';
import { Account, AccountVars, RepositoriesData, RepositoriesVars, Node } from './api/types';
import { sortByName } from './utils';
import { Loader, SecondaryButton } from './common';
import { Layout } from './theme';
import { SearchAccount, Profile, Repositories } from './components';
import { theme, GlobalStyles, Text } from './theme';

import 'semantic-ui-css/semantic.min.css';

const { Flex, Grid, Box } = Layout;

export const SortRepositoriesWrapper = styled(Box)({
  '& > button': {
    position: 'sticky',
    top: 0,
  },
});

const App = () => {
  // const { loading: loadingUser, data: userData } = useQuery<User>(CURRENT_USER);
  const [account, setAccount] = useState('');
  const [isSorted, setIsSorted] = useState<boolean>(false);

  const { loading: loadingRepository, data: repositoriesResponse, fetchMore } = useQuery<
    RepositoriesData,
    RepositoriesVars
  >(TEST, {
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

  const handleSort = () => setIsSorted((value: Boolean) => !value);

  // dont mutate original array
  const repositories = [...(repositoriesResponse?.user.repositories.edges || [])];

  console.log('repositoriesResponse', repositoriesResponse);

  // isSorted && repositories.sort(sortByName);

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
              <>
                <Repositories
                  repositoriesData={repositories}
                  fetchMore={fetchMore}
                  lastItemCursor={repositoriesResponse?.user.repositories.pageInfo.endCursor}
                />
                <SortRepositoriesWrapper justifySelf="start">
                  <SecondaryButton compact onClick={handleSort} toggle active={isSorted}>
                    <Text>sort by name</Text>
                    <Icon name="sort" inverted fitted />
                  </SecondaryButton>
                </SortRepositoriesWrapper>
              </>
            ) : null}
          </Grid>
        </Flex>
      </ThemeProvider>
    </>
  );
};

export default App;
