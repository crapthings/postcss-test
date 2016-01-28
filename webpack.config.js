var ExtractTextPlugin = require("extract-text-webpack-plugin")

var poststylus = require('poststylus')

module.exports = {
	cache: true,
	context: __dirname + '/app',
	entry: './index.js',
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel', exculde: /node_modules/, query: { presets: ['es2015'], plugins: ['add-module-exports'] } },
			{ test: /\.html$/, loader: 'html', exculde: /node_modules/ },
			{ test: /\.css$/, loader: 'style!css!postcss', exculde: /node_modules/ },
			{ test: /\.styl$/, loader: 'style!css!stylus', exculde: /node_modules/ }
			// { test: /\.styl$/, loader: ExtractTextPlugin.extract('css-loader!stylus-loader'), exculde: /node_modules/ }
			// { test: /\.styl$/, loader: ExtractTextPlugin.extract('stylus', 'css-loader!stylus-loader'), exculde: /node_modules/ }
		]
	},
	// plugins: [
 //        new ExtractTextPlugin('app.css')
 //    ],
	stylus: {
		use: [poststylus(['autoprefixer', 'postcss-short', 'postcss-sorting', 'postcss-cssnext', 'rucksack-css'])]
	}
}
