import { gql } from '@apollo/client';

export interface User {
  login: string;
  name: string;
}

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
  query($number_of_repos: Int!) {
    viewer {
      repositories(last: $number_of_repos) {
        nodes {
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
      name
      avatarUrl
      email
      url
    }
  }
`;
