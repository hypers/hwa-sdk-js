module.exports = (api, options) => {
  const { NODE_ENV } = options || process.env;
  const modules = NODE_ENV === 'esm' ? false : 'commonjs';
  if (api) {
    api.cache(false);
  }
  return {
    presets: [['@babel/preset-env', { modules, loose: true }]],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };
};
