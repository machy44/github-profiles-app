export interface AccountData {
  name: string;
  avatarUrl: string;
  email: string;
  url: string;
}

export interface Account {
  user: AccountData;
}

export interface AccountVars {
  username: string;
}

export interface RepositoriesVars {
  number_of_repos: number;
  username: string;
  before?: string;
}

export interface RepositoriesData {
  id: string;
  user: {
    id: string;
    repositories: Repositories;
  };
}

export interface Repositories {
  edges: Edge[];
  pageInfo: {
    startCursor: string;
    endCursor: string;
  };
}

export interface Edge {
  cursor: string;
  node: Node;
}

export interface Node {
  id: string;
  name: string;
  url: string;
  description: string;
}

// export interface User {
//   login: string;
//   name: string;
// }
