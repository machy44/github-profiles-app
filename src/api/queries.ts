import { gql } from '@apollo/client';

// interface Viewer
export const CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

export const GET_ACCOUNT = gql`
  query($username: String!) {
    user(login: $username) {
      id
      name
      avatarUrl
      email
      url
    }
  }
`;

export const GET_ACC_REPOSITORIES = gql`
  query($number_of_repos: Int!, $username: String!, $before: String) {
    user(login: $username) {
      id
      repositories(last: $number_of_repos, before: $before) {
        edges {
          cursor
          node {
            id
            name
            url
            description
          }
        }
        pageInfo {
          endCursor
          startCursor
        }
      }
    }
  }
`;
