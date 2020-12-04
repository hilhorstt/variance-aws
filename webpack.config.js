const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = env => {
    return {
        mode: env,
        entry: './src/index.js',
        output: {
            path: path.resolve(ROOT_PATH, 'static'),
            publicPath: 'http://localhost:3000/',
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: path.join(__dirname, 'static'),
            compress: true,
            port: 3010
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
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
                    ]
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
            new CopyPlugin({
                patterns: [
                    { from: 'static/bundle.js', to: '../dist/static/bundle.js', toType: 'file' },
                    { from: 'static/styles.css', to: '../dist/static/styles.css', toType: 'file' },
                    { from: 'src/images', to: '../dist/static/images', force: true },
                    { from: 'src/server.js', to: '../dist/server.js', toType: 'file' },
                    { from: 'package.json', to: '../dist/package.json', toType: 'file' },
                    { from: 'index.html', to: '../dist/index.html', toType: 'file' },
                ],
            }),
        ],
    }
}
