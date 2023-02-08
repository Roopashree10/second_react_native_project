module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
