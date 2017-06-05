var path = require('path');
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/app/main.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        host: '0.0.0.0',
        contentBase: './public',
        port: 9090,
        historyApiFallback: true
    },
    devtool: 'sourcemap',
    plugins: [
        new ExtractTextPlugin('app.css'),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [".js", ".jsx"],
    },
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2017', 'es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            loader: 'url-loader',
        },
        { test: /\.(png|jpg)$/, loader: 'url-loader?name=images/[name].[ext]' },
        {
            test: /\.s[ac]ss$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'style-loader'
            })
        }]
    }
};