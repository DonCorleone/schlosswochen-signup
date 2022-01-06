const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
  resolve: {
    fallback: { "crypto": false }
  }
};
