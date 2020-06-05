module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];

  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
    [
      "babel-plugin-styled-components",
      {
        ssr: false, // deactivate server side rendering
        pure: true, //dead code elimination
        transpileTemplateLiterals: true, //lesser transpilation size than babel
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
