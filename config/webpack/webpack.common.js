const utils = require('../utils');

module.exports = function() {
    return {
        entry: {
            main: utils.root('src', 'main.ts')
        },
        externals: {
            'reflect-metadata': {
                commonjs: 'reflect-metadata'
            }
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'babel-loader',
                    exclude: [/config/, /node_modules/, /\.spec\.ts$/]
                },
                {
                    test: /\.js$/,
                    loader: 'source-map-loader',
                    enforce: 'pre'
                }
            ]
        },
        node: {
            __dirname: false
        },
        output: {
            path: utils.root('dist'),
            filename: 'main.js'
        },
        resolve: {
            extensions: ['.js', '.ts']
        },
        target: 'node'
    };
};
