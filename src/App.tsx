import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from './api/queries';
import { Hello, Button } from './components/index';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const { loading, data } = useQuery(CURRENT_USER);
  if (loading) return <div>loading....</div>;
  return (
    <>
      <Hello text="pero" />
      <Button>click me</Button>
      <span>{JSON.stringify(data)}</span>
    </>
  );
};

export default App;
