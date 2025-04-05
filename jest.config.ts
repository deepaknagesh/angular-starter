import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageThreshold: {
    global: {
        lines: 80,
        statements: 95,
        functions: 95,
        branches: 80,
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/e2e/'],
};

export default jestConfig;