const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// constants
const root_path = '/app/';
const src  = path.resolve(root_path, 'src');
const dist = path.resolve(root_path, 'dist');


module.exports = {
  entry: {
    js: [ 'babel-polyfill', src + '/index.js',],
  },
  output: {
    filename: 'bundle.[name]',
    path:  dist,
  },
  module: {
    rules: [
	{
      	    test: /\.(js|jsx)$/,
      	    exclude: /node_modules/,
      	    loader: 'babel-loader',
	    query: {
              plugins: ["transform-react-jsx"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
	    }
	},
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['./public']),
  ],
};
