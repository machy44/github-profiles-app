import React, { useRef } from 'react';
import { PrimaryButton, Layout, SearchInput } from '../common';

const { Flex, Spacer } = Layout;

const SearchAccount = ({ submitAccount }: any) => {
  const ref = useRef();

  const handleChange = (event) => {
    ref.current = event.target.value;
  };

  const handleSubmit = () => {
    submitAccount(ref.current);
  };

  return (
    <Flex flexDirection="column" alignItems="center" width="70%" mx="auto" py="2rem">
      <Flex>
        <SearchInput inverted onChange={handleChange} />
        <Spacer mr={10} />
        <PrimaryButton onClick={handleSubmit}>Search Repository</PrimaryButton>
      </Flex>
    </Flex>
  );
};

export default SearchAccount;
