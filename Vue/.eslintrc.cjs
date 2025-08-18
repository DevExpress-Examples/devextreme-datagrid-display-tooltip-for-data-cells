module.exports = {
  root: true,
  extends: ["devextreme/spell-check"],
  overrides: [
    {
      files: ["*.ts", "*.vue"],
      extends: ["@vue/eslint-config-typescript", "devextreme/vue"],
      env: { es6: true },
      parserOptions: {
        project: "./tsconfig.json",
        createDefaultProgram: true,
        // eslint-disable-next-line spellcheck/spell-checker
        ecmaVersion: 2020,
      },
      globals: {
        System: false,
        AzureGateway: false,
        AzureFileSystem: false,
      },
    },
  ],
};
