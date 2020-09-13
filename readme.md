# USAGE

1. create .env file in root of the project and create GITHUB_AUTH_TOKEN variable
2. assign valid github user token to GITHUB_AUTH_TOKEN variable (example: GITHUB_AUTH_TOKEN={github_token})
3. run yarn start:dev to start dev server

## `yarn start:dev`

- will start development server on [http://localhost:8080](http://localhost:8080)

## yarn build

- script for production build

## project structure

- api -> folder where graphql queries, api types and apollo client are defined
- theme -> inside theme there is layout, typography and theme defined. I used styled-system (https://styled-system.com/) and emotion.js for styling. Maybe ui would be better name for this folder
- common -> inside common folder are base components used for constructing more complex components
- components -> components which are using common, theme folder and semantic ui components (https://react.semantic-ui.com/).

# NOTES

## project setup

- setup react, typescript, babel
  - https://dev.to/jacopobonta/react-typescript-webpack-3c6l
  - https://medium.com/swlh/2020-settings-of-react-typescript-project-with-webpack-and-babel-403c92feaa06 - ts and babel together
- setup prettier https://glebbahmutov.com/blog/configure-prettier-in-vscode/
- add css files loader to webpack
  - https://chriscourses.com/blog/loading-fonts-webpack
  - https://webpack.js.org/guides/asset-management/
- setup env variables in webpack- https://www.npmjs.com/package/dotenv-webpack
- minimize svg in webpack https://iamakulov.com/notes/optimize-images-webpack/

## styles

- I am using styled-system to get Layout and theme which will enable me to do responsive design.

## graphql setup

github api docs link -> https://docs.github.com/en/graphql

- check out https://github.com/MichalLytek/type-graphql for graphql typings
