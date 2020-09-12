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
  after?: string;
}

export interface RepositoriesData {
  user: Repositories;
}

interface Repositories {
  repositories: Edges;
}

interface Edges {
  cursor: string;
  nodes: Node[];
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
