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
}

export interface RepositoriesData {
  user: Repositories;
}

interface Repositories {
  repositories: Nodes;
}

interface Nodes {
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
