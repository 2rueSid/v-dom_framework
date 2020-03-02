const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpackRules = [];

module.exports = {
	entry: { main: './src/main.js' },
	// entry: { main: './src/some.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	module: {
		rules: webpackRules,
	},
	optimization: {
		flagIncludedChunks: true,
		usedExports: true,
		concatenateModules: true,
		splitChunks: {
			hidePathInfo: true,
			minSize: 30000,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
		},
		noEmitOnErrors: true,
		minimize: false,
	},
	plugins: [
		new htmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './public/index.html',
			filename: 'index.html',
		}),
	],
};

let babelLoader = {
	test: /\.js$/,
	exclude: /(node_modules|bower_components)/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env'],
		},
	},
};
webpackRules.push(babelLoader);
