var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['./app/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // Babel loader
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?optional[]=runtime'
            },
            // CSS loader
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            // SASS/SCSS
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-minimize!sass-loader')
            },
            // Json
            {
                test: /\.json$/,
                loader: 'json'
            },
            // Images
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
                loader: 'file'
            },
        ]
    },
    resolve: {
        // where to find modules
        modulesDirectories: [
            'node_modules',
            'resources',
            'static',
            'app'
        ],
        extensions: ['.js', '.json', '']
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}