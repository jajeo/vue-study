var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: "cheap-eval-source-map",
	entry: {
		app: ["./app/main.js"]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/assets/",
		filename:"bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: "raw-loader"
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template:"./build/index.html"
		})
	],
	devServer: {
		contentBase: "./build",
		hot:true
	}
}