import React from 'react';
import styled from '@emotion/styled';
import { SecondaryButton } from '../common';
import { Item, Card, Icon } from 'semantic-ui-react';
import { Layout, Text } from '../theme';
import { Node } from '../api/types';

const { Box } = Layout;

interface RepositoriesProps {
  repositoriesData: Node[];
  handleSort: Function;
  isSorted: boolean;
}

const ItemsGroup = styled(Item.Group)({
  margin: '0 !important',
});

const SortRepositoriesWrapper = styled(Box)({
  '& > button': {
    position: 'sticky',
    top: 0,
  },
});

const Repositories: React.FC<RepositoriesProps> = ({ repositoriesData, handleSort, isSorted }) => {
  return (
    <>
      <ItemsGroup relaxed>
        {repositoriesData.map(({ name, url, description, id }) => {
          return (
            <Card fluid key={id}>
              <Item.Content>
                <Item.Header>{name}</Item.Header>
                <Item.Meta>{description}</Item.Meta>
                <Item.Extra as="a">{url}</Item.Extra>
              </Item.Content>
            </Card>
          );
        })}
      </ItemsGroup>
      <SortRepositoriesWrapper justifySelf="start">
        <SecondaryButton compact onClick={() => handleSort((value: Boolean) => !value)} toggle active={isSorted}>
          <Text>sort by name</Text>
          <Icon name="sort" inverted fitted />
        </SecondaryButton>
      </SortRepositoriesWrapper>
    </>
  );
};

export default Repositories;
