module.exports = {
  devtool: '#source-map',
  entry: './src/main.js',
  output: { path: __dirname, filename: 'build/dist/bundle.js' },
  module: {
    preLoaders: [{ test: /\.js?$/, loader: 'eslint' }],
    loaders: [{ test: /\.css$/, loader: 'style!css' }]
  },
  devServer: { noInfo: true }
};
