import React from 'react';
import styled from '@emotion/styled';
import { Item, Card } from 'semantic-ui-react';
import { Node } from '../api/types';

const ItemsGroup = styled(Item.Group)({
  margin: '0 !important',
});

const Repositories: React.FC<{ repositoriesData: Node[] }> = ({ repositoriesData }) => {
  return (
    <ItemsGroup relaxed>
      {repositoriesData.map(({ name, url, description }) => {
        return (
          <Card fluid>
            <Item.Content>
              <Item.Header>{name}</Item.Header>
              <Item.Meta>{description}</Item.Meta>
              <Item.Extra as="a">{url}</Item.Extra>
            </Item.Content>
          </Card>
        );
      })}
    </ItemsGroup>
  );
};

export default Repositories;
