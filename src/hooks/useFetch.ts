import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ACC_REPOSITORIES, GET_ACCOUNT } from '../api/queries';
import { Account, AccountVars, RepositoriesData, RepositoriesVars, Node } from '../api/types';

const useFetch = () => {
  // const { loading: loadingUser, data: userData } = useQuery<User>(CURRENT_USER);
  const [account, setAccount] = useState<string>('');
  const [isSorted, setIsSorted] = useState<boolean>(false);

  const { loading: loadingRepository, data: repositoriesResponse, fetchMore, error: repoError } = useQuery<
    RepositoriesData,
    RepositoriesVars
  >(GET_ACC_REPOSITORIES, {
    variables: {
      number_of_repos: 10,
      username: account,
    },
  });

  const { loading: loadingAccount, data: accountResponse, error: accError } = useQuery<Account, AccountVars>(
    GET_ACCOUNT,
    {
      variables: {
        username: account,
      },
    },
  );

  const waitingForResponse = loadingAccount || loadingRepository;

  return {
    setAccount,
    account,
    isSorted,
    setIsSorted,
    repositoriesResponse,
    waitingForResponse,
    accountResponse,
    fetchMore,
    accError,
  };
};

export default useFetch;
