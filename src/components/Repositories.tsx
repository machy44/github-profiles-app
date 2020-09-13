import React from 'react';
import styled from '@emotion/styled';
import { Link } from '../common';
import { Item, Card } from 'semantic-ui-react';
import { Edge, Repositories as RepositoriesType, RepositoriesData } from '../api/types';
import { SecondaryButton } from '../common';
import { Text } from '../theme';

interface RepositoriesProps {
  repositoriesData: Edge[];
  fetchMore: Function;
  firstItemCursor?: RepositoriesType['pageInfo']['startCursor'];
  isLoadingMore: boolean;
}

const ItemsGroup = styled(Item.Group)({
  margin: '0 !important',
});

const Repositories: React.FC<RepositoriesProps> = ({ repositoriesData, fetchMore, firstItemCursor, isLoadingMore }) => {
  return (
    <ItemsGroup relaxed>
      {repositoriesData.map(({ node }) => {
        const { name, url, description, id } = node;
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
      <SecondaryButton
        disabled={!firstItemCursor}
        compact
        fluid
        loading={isLoadingMore}
        size="mini"
        onClick={() =>
          // https://www.apollographql.com/docs/react/data/pagination/#using-fetchmore
          fetchMore({
            variables: {
              before: firstItemCursor,
              number_of_repos: 5,
            },
            updateQuery: (
              prevRes: RepositoriesData,
              { fetchMoreResult }: { fetchMoreResult: RepositoriesData },
            ): RepositoriesData => {
              if (!fetchMoreResult) return prevRes;
              fetchMoreResult.user.repositories.edges = [
                ...prevRes.user.repositories.edges,
                ...fetchMoreResult.user.repositories.edges,
              ];

              return fetchMoreResult;
            },
          })
        }
      >
        <Text>load more</Text>
      </SecondaryButton>
    </ItemsGroup>
  );
};

export default Repositories;
