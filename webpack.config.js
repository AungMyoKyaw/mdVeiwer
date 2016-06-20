var webpack = require('webpack');
module.exports = {
	entry:['./app/index.jsx'],
	output:{
		filename:'build.js',
		path:__dirname + '/build'
	},
	module:{
		loaders:[
		{
			test:/\.jsx$/,
			include:__dirname + '/app',
			loader:'babel'
		},
		{
			test:/\.scss$/,
			include:__dirname + '/app',
			loader:'style!css!sass',
		}
		]
	},
	plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
	]
};