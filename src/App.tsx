// need this to setup pragma without babel preset
// https://emotion.sh/docs/css-prop
/** @jsx jsx */
import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { Icon, Message } from 'semantic-ui-react';
import { useFetch, useViewport } from './hooks';
import { sortByName } from './utils';
import { Loader, SecondaryButton } from './common';
import { SearchAccount, Profile, Repositories } from './components';
import { theme, GlobalStyles, Text, Layout } from './theme';

const { Flex, Grid, Box } = Layout;

export const SortRepositoriesWrapper = styled(Box)({
  '& > button': {
    position: 'sticky',
    top: 0,
  },
});

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

  const { isMobile } = useViewport();

  const handleSort = () => setIsSorted((value: boolean) => !value);

  // dont mutate original array
  const repositories = [...(repositoriesResponse?.user.repositories.edges || [])];

  isSorted && repositories.sort(sortByName);

  const sortButton = (style: string) => (
    <SortRepositoriesWrapper
      css={css`
        ${style}
      `}
    >
      <SecondaryButton compact onClick={handleSort} toggle active={isSorted}>
        <Text>sort by name</Text>
        <Icon name="sort" inverted fitted />
      </SecondaryButton>
    </SortRepositoriesWrapper>
  );

  return (
    <React.Fragment>
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
          {/* if searched user does not exist show this error
              I have to check repositories.length in conditional because if I search user which is cached
              repositories and error message will be shown in the same moment. For some reason accError still exists
              when apollo takes data from cache. I could reset accError or something but this was the fastest way to prevent 
              this bug
          */}
          {!waitingForResponse && !!account && !!accError && !repositories.length && (
            <Message color="red">
              <Message.Header>{accError.message}</Message.Header>
            </Message>
          )}
          <Grid
            gridTemplateColumns={isMobile ? 'auto' : 'auto 1fr auto'}
            gridGap={['sm', 'md', 'lg']}
            mt={['sm', 'md', 'lg']}
          >
            {accountResponse ? (
              <Flex position="relative">
                <Box justifySelf="start">
                  <Profile profileData={accountResponse.user} />
                </Box>
                {/* TODO: checkout for a better way to change layout on mobile screen*/}
                {isMobile
                  ? sortButton(`
                  position: absolute;
                  bottom: 0px;
                  right: 0px;
                `)
                  : null}
              </Flex>
            ) : null}
            {repositories.length ? (
              <React.Fragment>
                <Repositories
                  repositoriesData={repositories}
                  fetchMore={fetchMore}
                  firstItemCursor={repositoriesResponse?.user.repositories.pageInfo.startCursor}
                />
                {isMobile ? null : sortButton('justify-self: start')}
              </React.Fragment>
            ) : null}
          </Grid>
        </Flex>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
