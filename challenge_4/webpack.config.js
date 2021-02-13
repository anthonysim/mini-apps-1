const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
    ]
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
}