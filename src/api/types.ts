export interface AccountData {
  name: string;
  avatarUrl: URL;
  email: string;
  url: URL;
}

export interface Account {
  user: AccountData;
}

export interface AccountVars {
  username: string;
}

// export interface User {
//   login: string;
//   name: string;
// }
