const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  watch: true,
  output: {
    path: path.join(process.cwd(), 'lib'),
    filename: 'index.js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('awesome-typescript-loader'),
          },
          {
            loader: require.resolve('react-docgen-typescript-loader')
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, 'src', 'components'),
      Typings: path.resolve(__dirname, 'src', 'typings')
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  devtool: 'source-map'
};