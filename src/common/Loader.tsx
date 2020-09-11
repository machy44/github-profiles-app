import React from 'react';
import { Dimmer, Loader as SLoader, LoaderProps, DimmerProps } from 'semantic-ui-react';

type Loader = LoaderProps & DimmerProps;

const Loader: React.FC<Loader> = ({ active, page, ...props }) => {
  return (
    <Dimmer active={active} page={page}>
      <SLoader active={active} {...props}>
        Loading
      </SLoader>
    </Dimmer>
  );
};

export default Loader;
