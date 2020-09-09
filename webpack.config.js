const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
          },
      ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: {
            index: '/'
        },
        publicPath: 'http://localhost:8080/',
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello dave',
            template: "./src/index.html"
        })
    ]
}
