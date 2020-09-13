import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { Icon, Message } from 'semantic-ui-react';
import { useFetch, useViewport } from './hooks';
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

const SMALL_SCREEN = 768;

const App = () => {
  const {
    setAccount,
    account,
    isSorted,
    setIsSorted,
    repositoriesResponse,
    waitingForResponse,
    accountResponse,
    fetchMore,
    accError,
  } = useFetch();
  const { width } = useViewport();

  const handleSort = () => setIsSorted((value: boolean) => !value);

  // dont mutate original array
  const repositories = [...(repositoriesResponse?.user.repositories.edges || [])];

  isSorted && repositories.sort(sortByName);

  console.log('width', width);

  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Flex
          flexDirection="column"
          py={['sm', 'md', 'lg']}
          px={['xs', 'sm', 'md', 'lg']}
          mx="auto"
          alignItems="center"
        >
          <Loader active={waitingForResponse} />
          <Text fontSize={[3, 4]} color="white" fontFamily="inherit" textAlign="center" letterSpacing={[1, 2]}>
            Github profiles app
          </Text>
          <SearchAccount submitAccount={setAccount} />
          {!waitingForResponse && !!account && !!accError && (
            <Message color="red">
              <Message.Header>{accError.message}</Message.Header>
            </Message>
          )}
          <Grid
            gridTemplateColumns={width <= SMALL_SCREEN ? 'auto' : 'auto 1fr auto'}
            gridGap={['sm', 'md', 'lg']}
            mt={['sm', 'md', 'lg']}
          >
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
                  firstItemCursor={repositoriesResponse?.user.repositories.pageInfo.startCursor}
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
