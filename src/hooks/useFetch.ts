import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ACC_REPOSITORIES, GET_ACCOUNT } from '../api/queries';
import { Account, AccountVars, RepositoriesData, RepositoriesVars, Node } from '../api/types';

export const useFetch = () => {
  // const { loading: loadingUser, data: userData } = useQuery<User>(CURRENT_USER);
  const [account, setAccount] = useState<string>('');
  const [isSorted, setIsSorted] = useState<boolean>(false);

  const { loading: loadingRepository, data: repositoriesResponse, fetchMore } = useQuery<
    RepositoriesData,
    RepositoriesVars
  >(GET_ACC_REPOSITORIES, {
    variables: {
      number_of_repos: 10,
      username: account,
    },
  });

  const { loading: loadingAccount, data: accountResponse } = useQuery<Account, AccountVars>(GET_ACCOUNT, {
    variables: {
      username: account,
    },
  });

  return {
    setAccount,
    isSorted,
    setIsSorted,
    loadingRepository,
    repositoriesResponse,
    loadingAccount,
    accountResponse,
    fetchMore,
  };
};
