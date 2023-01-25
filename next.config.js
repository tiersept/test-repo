const path = require("path");
const SWCWebpackPlugin = require("swc-webpack-plugin");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["@chakra-ui/core"] = path.resolve(
        "./node_modules/@chakra-ui/core"
      );
    }
    config.plugins.push(new SWCWebpackPlugin());
    return config;
  },
};
