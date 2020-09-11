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
