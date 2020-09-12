import React from 'react';
import { Item, Card } from 'semantic-ui-react';
import { Node } from '../api/types';

const Repositories: React.FC<{ repositoriesData: Node[] }> = ({ repositoriesData }) => {
  return (
    <Item.Group divided>
      {repositoriesData.map(({ name, url, description }) => {
        return (
          <Card>
            <Item.Content>
              <Item.Header>{name}</Item.Header>
              <Item.Meta>{description}</Item.Meta>
              <Item.Extra as="a">{url}</Item.Extra>
            </Item.Content>
          </Card>
        );
      })}
    </Item.Group>
  );
};

export default Repositories;
