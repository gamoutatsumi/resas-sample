import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  testMatch: [
    '**/test/**/*.test.{ts,tsx}'
  ],
  moduleNameMapper: {
    '@/(.+)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom',
}

export default config
