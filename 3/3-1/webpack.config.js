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
                test:/\.jpg$/,
                use:{
                    loader:'file-loader'
                }
            }
        ]
    }
}
