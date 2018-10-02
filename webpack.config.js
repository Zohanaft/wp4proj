'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 *  
 */
require('es6-promise').polyfill();

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.bundle.js',
        publicPath: '/deploy'
    },

    plugins: [
        new ExtractTextPlugin('./dist/css/app.css'),
        
        new styleLintPlugin({
            configFile: '.stylelintrc',
            context: '',
            files: '**/*.scss',
            syntax: 'scss',
            failOnError: false,
            quiet: false
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: { presets: ['env'] }
                },
            },
            {
                new ExtractTextPlugin
            }
        ]
    },
    devtool: 'source-map'
}