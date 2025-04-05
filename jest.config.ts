import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageThreshold: {
    global: {
        lines: 95,
        statements: 95,
        functions: 95,
        branches: 95,
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/e2e/'],
  // Ignore the following files from coverage reports
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/app/transloco-root.module.ts',
  ],
};

export default jestConfig;