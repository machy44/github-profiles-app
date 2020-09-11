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

export const GET_REPOSITORIES = gql`

`

export GET_USER_REPOSITORIES
