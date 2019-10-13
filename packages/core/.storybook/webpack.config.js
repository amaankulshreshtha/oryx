const path = require('path');
const custom = require('../webpack.config.js');

module.exports = async({config}) => ({
  ...config, 
  module: {...config.module, rules: Object.assign(config.module.rules, custom.module.rules)},
  resolve: {...config.resolve, ...custom.resolve }
});