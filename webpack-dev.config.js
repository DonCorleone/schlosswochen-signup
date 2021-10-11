const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [
    new Dotenv(),
  ],
  resolve: {
    fallback: { "crypto": false }
  }
};
