var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
var webpack = require('webpack');

module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/dev-server",
		"./src/main.js"
		],
	output: {
		path: path.join(__dirname, "dist"),
		filename: "build.js"
	},
	resolve: {
 	 alias: {
    	'vue$': 'vue/dist/vue.common.js'
 	 }
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.css$/,
				loader: "style!css"
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template:"./demo1.html"
		})
	],
	devServer: {
		contentBase: "./dist",
		hot: true
	}
}