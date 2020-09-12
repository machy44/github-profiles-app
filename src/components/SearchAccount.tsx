import React, { useRef } from 'react';
import { PrimaryButton, SearchInput } from '../common';
import styled from '@emotion/styled';
import { Layout } from '../theme';

const { Flex, Spacer } = Layout;

const SearchAccountWrapper = styled(Flex)({
  position: 'sticky',
  top: 0,
  zIndex: 2,
});

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
    <SearchAccountWrapper alignItems="center" mx="auto" p="1rem" bg="#444448" borderRadius="4px">
      <SearchInput inverted onChange={handleChange} icon="search" />
      <Spacer mr={10} />
      <PrimaryButton onClick={handleSubmit}>Search Repository</PrimaryButton>
    </SearchAccountWrapper>
  );
};

export default SearchAccount;
