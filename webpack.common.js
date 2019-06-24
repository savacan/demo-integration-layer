const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    polyfill: '@babel/polyfill',
    integration: './src/index.tsx'
  },
  optimization: {
    splitChunks: {
      name: 'integration_vendor',
      chunks: 'initial'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'integration-layer-test',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }]
      }
    ]
  }
}
