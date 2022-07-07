const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/lib1.js',
    output: {
        path: __dirname,
        filename: `lib1.out.js`,
        library: 'Lib1',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@babel/runtime-corejs3': path.resolve(__dirname, './node_modules/@babel/runtime-corejs3')
        }
    }
};