module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      "corejs": "3.6",
    }]
  ];

  const plugins = [
    ["@babel/plugin-syntax-dynamic-import"]
  ]

  return {
    presets,
    plugins
  };
}
