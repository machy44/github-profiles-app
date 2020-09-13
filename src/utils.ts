import { Account, AccountVars, RepositoriesData, RepositoriesVars, Edge, Node } from './api/types';

// https://stackoverflow.com/a/45544166
const sortRepos = (value: keyof Node) => (a: Edge, b: Edge) => {
  return a.node[value].localeCompare(b.node[value]);
};

export const sortByName = sortRepos('name');
