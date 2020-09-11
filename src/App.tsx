import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER, User } from './api/queries';
import { Loader, Layout } from './common';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const { loading, data } = useQuery<User>(CURRENT_USER);
  return (
    <Layout.Box>
      <Loader active={loading} />
      <span>{JSON.stringify(data)}</span>
    </Layout.Box>
  );
};

export default App;
