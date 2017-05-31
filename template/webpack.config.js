var webpack = require('webpack');
var path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var config = {
  entry: {
    'weex-bundle': './weex.entry.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.vue(\?[^?]+)?$/,
        loaders: ['weex-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
};

if (process.env.NODE_ENV === 'production'){
  config.output = {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-min.js'
  }
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ];
}

config.plugins.push(new webpack.BannerPlugin({
 raw: true ,
 banner: '// { "framework": "Vue" }\n'
}));

module.exports = config;
