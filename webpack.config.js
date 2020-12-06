const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
    mode: env,
    entry: './src/index.js',
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        publicPath: 'http://localhost:3010/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 3010,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /i18n[\\/]index\.js/,
                use: [
                    { loader: 'i18next-resource-store-loader' },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
            title: 'Test Player',
            template: path.resolve(ROOT_PATH, 'src/index.html'), // Load a custom template
            inject: 'body', // Inject all scripts into the body
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/images', to: '../dist/static/images', force: true },
                { from: 'src/server.js', to: '../dist/server.js', toType: 'file' },
                { from: 'package.json', to: '../dist/package.json', toType: 'file' },
                { from: 'src/index.html', to: '../dist/index.html', toType: 'file' },
            ],
        }),
    ],
});
