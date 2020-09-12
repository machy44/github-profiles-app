import React from 'react';
import styled from '@emotion/styled';
import { Link } from '../common';
import { Item, Card } from 'semantic-ui-react';
import { Layout } from '../theme';
import { Node } from '../api/types';
import { Loader, SecondaryButton } from './common';

const { Box } = Layout;

interface RepositoriesProps {
  repositoriesData: Node[];
}

const ItemsGroup = styled(Item.Group)({
  margin: '0 !important',
});

const Repositories: React.FC<RepositoriesProps> = ({ repositoriesData }) => {
  return (
    <>
      <ItemsGroup relaxed>
        {repositoriesData.map(({ name, url, description, id }) => {
          return (
            <Card fluid key={id}>
              <Item.Content>
                <Item.Header>{name}</Item.Header>
                <Item.Meta>{description}</Item.Meta>
                <Item.Extra>
                  <Link href={url} />
                </Item.Extra>
              </Item.Content>
            </Card>
          );
        })}
        <SecondaryButton compact>load more</SecondaryButton>
      </ItemsGroup>
    </>
  );
};

export default Repositories;
