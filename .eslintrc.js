module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'airbnb',
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'import/export': 0,
    'react/prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'max-len': 0,
    'react/destructuring-assignment': 0,
    'import/no-cycle': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-unused-vars': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/prefer-default-export': 0,
    'arrow-body-style': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
