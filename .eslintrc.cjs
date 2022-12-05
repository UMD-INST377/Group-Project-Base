module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    mocha: true
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': [0],
    'newline-per-chained-call': [0],
    semi: [1, 'always'],
    'eol-last': [0],
    'comma-spacing': 1,
    'no-console': [0],
    'no-mixed-requires': [0],
    'no-underscore-dangle': [0],
    'no-extra-parens': 0,
    'brace-style': 1,
    'object-curly-spacing': 0,
    'no-mixed-spaces-and-tabs': 1,
    'no-trailing-spaces': 1,
    'no-unused-vars': 1,
    'key-spacing': 1,
    'comma-dangle': [1, 'never'],
    'space-before-function-paren': 0,
    'object-shorthand': 0,
    'space-infix-ops': 1,
    'import/extensions': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': [
      1,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'jsx-a11y/href-no-hash': 0,
    'react/prefer-es6-class': [0, 'never'],
    'react/prefer-stateless-function': 0,
    'import/imports-first': 1,
    'no-restricted-globals': 0,
    'no-undef': 0
  }
};
