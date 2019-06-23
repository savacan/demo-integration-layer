const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
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
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8001/public'
  },

  devtool: 'source-map',

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
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: '8001'
  }
}
