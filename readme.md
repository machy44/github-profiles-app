## project setup

- setup react, typescript, babel
  - https://dev.to/jacopobonta/react-typescript-webpack-3c6l
  - https://medium.com/swlh/2020-settings-of-react-typescript-project-with-webpack-and-babel-403c92feaa06 - ts and babel together
- setup prettier https://glebbahmutov.com/blog/configure-prettier-in-vscode/
- add css files loader to webpack
  - https://chriscourses.com/blog/loading-fonts-webpack
  - https://webpack.js.org/guides/asset-management/
- setup env variables in webpack- https://www.npmjs.com/package/dotenv-webpack

## styles

- I am using styled-system to get Layout and theme which will enable me to do responsive design.

## graphql setup

github api docs link -> https://docs.github.com/en/graphql

# USAGE

1.  first define GITHUB_AUTH_TOKEN env which has to be valid github user token

### `yarn start:dev`

will start development server on [http://localhost:8080](http://localhost:8080)

### project structure

- api -> folder where graphql queries, api types and apollo client are defined
- theme -> inside theme there is layout, typography and theme defined. I used styled-system (https://styled-system.com/) and emotion.js for styling. Maybe ui would be better name for this folder
- common -> inside common folder are base components used for constructing more complex components
- components -> components which are using common and theme folder

## my notes

- check out https://github.com/MichalLytek/type-graphql
