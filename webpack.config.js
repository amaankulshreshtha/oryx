const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    oryx: path.resolve(__dirname, 'packages', 'oryx', 'index.ts'),
    examples: path.resolve(__dirname, 'packages', 'examples', 'index.tsx')
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "index.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.t(s|sx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    inline: true,
    port: 8080,
    hot: true
  }
};