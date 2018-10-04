const { addDecoratorsLegacy, disableEsLint } = require("customize-cra");

module.exports = function override(config, env) {
  addDecoratorsLegacy();
  disableEsLint();
  return config;
};
