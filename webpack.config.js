const path = require('path')

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                // in case I want to use SASS;
                { loader: 'sass-loader' }
            ]
        }, {

            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "url-loader"

        }]
    },

    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}