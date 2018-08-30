const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    persona: './src/index.js'
  },
  output: {
    library: 'Persona',
    libraryTarget: 'umd',
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  mode: 'production',
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    watchContentBase: true,
    watchOptions: {
      poll: true
    }
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
              ]
            }
          }
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
          }
      ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].min.css',
        chunkFilename: '[id].css'
    })
  ]
};