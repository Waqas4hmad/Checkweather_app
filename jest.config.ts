module.exports = {
  preset: 'jest-expo',
    transformIgnorePatterns: [
    'node_modules/(?!(expo(nent)?|@expo|react-native|@react-native|@react-navigation|@unimodules|unimodules|@react-native-community|@react-native-async-storage|js-polyfills|@react-native)/)',
  ],
  bail: true,
    transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "./__tests__/mocks",
  ],
    setupFiles: [
    "./__tests__/mocks/libs/async-storage.ts",
  ],
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx}",
    "!./src/**/styles.ts"
  ],
};