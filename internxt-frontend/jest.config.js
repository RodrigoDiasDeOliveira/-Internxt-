module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },testPathIgnorePatterns: [
    '/node_modules/', 
    '/internxt-frontend/src/test/' // Caminho para a pasta que você quer ignorar
  ],
  
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$':  '<rootDir>/jest.mock.js',  
  },
  transform :{
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'], 
};
