const path = require('path');
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    entry: './src/index.jsx',// which file to begin with, 
    output: {
        path: path.resolve(__dirname, "./dist"), // what folder to put bundle in
        filename: 'bundle.js' // what name to use for bundle
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new WebpackNotifierPlugin({alwaysNotify: true})
    ]  
};