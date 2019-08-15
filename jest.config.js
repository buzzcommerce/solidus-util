module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  projects: [
    {
      displayName: 'foo',
      testMatch: ['<rootDir>/packages/core/**/*.spec.ts'],
      transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
      },
      testEnvironment: 'node',
    },
  ],
}
