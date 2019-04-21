module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          plugins: ["styled-jsx/babel", "storybook-settings"]
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
