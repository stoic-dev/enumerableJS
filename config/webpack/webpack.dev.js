const merge = require('webpack-merge');

const common = require('./webpack.common')();

module.exports = function() {
    const dev = {
        devtool: 'inline-source-map',
        mode: 'development'
    };

    return merge(common, dev);
};
