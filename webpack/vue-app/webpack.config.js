module.exports = {
	entry: "./src/main.js",
	output: {
		path: "./dist",
		filename: "build.js",
		publicPath: "/assets/"
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
			}
		]
	}
}