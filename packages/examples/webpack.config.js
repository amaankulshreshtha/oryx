const path = require('path');
console.log(path.join(process.cwd(), 'lib'))
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    chunkFilename: '[name].js',
    publicPath: '/lib/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};