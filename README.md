## Creating a new React project using NPM 

* create-react-app my-react-project
* cd my-react-project
* npm start

## Install prettier 
* npm install --save-dev prettier 

## Install EsLint
* # Using npm
npm install eslint --save-dev

npm install eslint-plugin-react babel-eslint --save-dev

After that, update .eslintrc to include:

{
  "parser": "babel-eslint",
  "plugins": ["react"],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
}
