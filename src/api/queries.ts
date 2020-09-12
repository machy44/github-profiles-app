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

export const GET_ACC_REPOSITORIES = gql`
  query($number_of_repos: Int!, $username: String!) {
    user(login: $username) {
      repositories(last: $number_of_repos) {
        nodes {
          id
          name
          url
          description
        }
      }
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
