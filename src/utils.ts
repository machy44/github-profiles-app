import { Account, AccountVars, RepositoriesData, RepositoriesVars, Node } from './api/types';

// https://stackoverflow.com/a/45544166
const sortRepos = (value: keyof Node) => (a: Node, b: Node) => a[value].localeCompare(b[value]);

export const sortByName = sortRepos('name');
