const merge = require('webpack-merge');

const OptimizeJsPlugin = require('optimize-js-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common')();

module.exports = function() {
    return merge(common, {
        mode: 'production',
        plugins: [
            new UglifyJsPlugin(),
            new OptimizeJsPlugin({
                sourceMap: false
            })
        ]
    });
};
