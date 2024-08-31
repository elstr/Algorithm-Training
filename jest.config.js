module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',  // Transpile TypeScript files using ts-jest
    '^.+\\.js$': 'babel-jest',  // Transpile JavaScript files using babel-jest
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|js)',
    '**/?(*.)+(spec|test).+(ts|js)'
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',  // Use the project's tsconfig.json file
    },
  },
};
