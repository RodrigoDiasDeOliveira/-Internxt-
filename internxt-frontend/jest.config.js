module.exports = {
  preset: 'ts-jest', // ou 'vite' se você estiver usando Vite
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest para transpilar arquivos TS
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock de estilos CSS
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Configuração de ambiente de testes
};


