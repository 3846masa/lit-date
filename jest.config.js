/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  extensionsToTreatAsEsm: ['.ts'],
  injectGlobals: false,
  roots: ['./src'],
  testMatch: ['**/__tests__/*.spec.ts'],
  transform: {
    '\\.+(ts)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
};

module.exports = config;
