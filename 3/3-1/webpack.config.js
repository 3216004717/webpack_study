const path = require('path')
module.exports = {
    mode:'production',
    entry:{
        main:'./src/index.js'
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'disk')
    },
    module:{
        rules:[
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'images',
                        limit:20480
                    }
                }
            }
        ]
    }
}
