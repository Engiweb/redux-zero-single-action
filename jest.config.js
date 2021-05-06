module.exports = {
  verbose: true,
  setupFiles: [],
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'json'
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  testMatch: [
    '<rootDir>/src/**/__test__/*.test.js'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ]
}
