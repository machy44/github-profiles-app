import React, { useRef } from 'react';
import { PrimaryButton, SearchInput } from '../common';
import { Icon } from 'semantic-ui-react';
import { Layout, Text } from '../theme';

const { Flex, Spacer } = Layout;

const SearchAccount = ({ submitAccount }: any) => {
  const ref = useRef();

  const handleChange = (event) => {
    ref.current = event.target.value;
  };

  const handleSubmit = () => {
    if (!ref.current) return;
    submitAccount(ref.current);
  };

  return (
    <Flex flexDirection="column" alignItems="center" width="70%" mx="auto" py="2rem">
      <Flex>
        <SearchInput inverted onChange={handleChange} icon="search" />
        <Spacer mr={10} />
        <PrimaryButton onClick={handleSubmit}>Search Repository</PrimaryButton>
      </Flex>
    </Flex>
  );
};

export default SearchAccount;
