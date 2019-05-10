const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'disk')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2,
                            // modules:true
                        }
                    },
                    'sass-loader',
                    'postcss-loader']
            },
            {
                test:/\.(eot|svg|ttf|woff)$/,
                use:['file-loader']
            }
        ]
    }
}
