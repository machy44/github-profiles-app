import React from 'react';
import styled from '@emotion/styled';
import { PrimaryButton, Layout, SearchInput } from '../common';

const { Flex, Spacer } = Layout;

// cosnt RepositoryList = (repositories) => {
//   return repositories.map(repository => )
// }

const SearchAccount = () => {
  return (
    <Flex flexDirection="column" alignItems="center" width="70%" mx="auto" py="2rem">
      <Flex>
        <SearchInput inverted />
        <Spacer mr={10} />
        <PrimaryButton>Search Repository</PrimaryButton>
      </Flex>
    </Flex>
  );
};

export default SearchAccount;
