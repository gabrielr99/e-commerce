module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020, // ou 6, 2015
    sourceType: 'module', // Para suportar 'import' e 'export'
  },
  // Suas outras configurações...
};