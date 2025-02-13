module.exports = {
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest', // Transforma arquivos TypeScript
    '^.+\\.js$': 'babel-jest', // Transforma arquivos JavaScript
    '.*\\.(vue)$': 'vue-jest', // Transforma arquivos Vue
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '^@/store/(.*)$': '<rootDir>/tests/mocks/storeMock.js', // ✅ Mock para store
    '^@/utils/(.*)$': '<rootDir>/tests/mocks/utilsMock.js', // ✅ Mock para utils
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(primevue)/)', // Transforma arquivos do PrimeVue
  ],
  collectCoverage: false,
  testEnvironment: 'jsdom',
}
