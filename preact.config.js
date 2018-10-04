import envVars from 'preact-cli-plugin-env-vars';
const path = require('path');

export default (config, env, helpers) => {
  const rules = helpers.getRules(config);
  config.plugins.splice(14, 1); // uglifyJsPlugin

  rules
    .find(item => item.index === 2)
    .rule.use.push({
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, './src/style/index.scss'),
      },
    });

  config.node = {
    fs: 'empty',
  };
  envVars(config, env, helpers);
};
