var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-eval-source-map',
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
				loaders: ["style","css"]
			},
			{
				test:/\.html$/,
				loader: "raw-loader"
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template:"./src/vuerouter-demo.html",
		})
	],
	devServer: {
		contentBase: "./dist",
		hot: true
	}
}