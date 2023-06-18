const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpackbar')
const path = require('path');

module.exports = {
    stats:'minimal',
    // output:{
    //     filename:"main[contenthash:5].js",
    //     path:path.resolve(__dirname,'dist'),
    //     clean:true,
    // },
    mode:process.env.NODE_ENV,
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:"head",
            script:['https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.js','https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js'],
            
        }),
        new MiniCssWebpackPlugin({
            filename:'[contenthash:8].css'
        }),
        new Webpack({
            fancy:true,
            minimal:true,
            profile:false
        })
    ],
    devServer:{
        static:path.resolve(__dirname,'dist'),
        open:true,
        proxy:{
            '^/api':{
                target:process.env.NODE_ENV==='development'?'http://127.0.0.1:3000':process.env.NODE_ENV==='production'?'http://api.cc0820.top:3000':'',
                pathRewrite:{'/api':''}
            },
            '^/api1':{
                target:'http://127.0.0.1:3001',
                pathRewrite:{'/api1':''}
            },
        }
    },
    externals:{
        jquery:"jQuery",
        lodash:"_"
    },
    resolve:{
        extensions: ['.js', '.json', '.css'],
        alias:{
            "@":path.resolve(__dirname,"./src")
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssWebpackPlugin.loader,'css-loader',"postcss-loader"]
            },
                {
                    test:/\.mp3$/,
                    type: 'asset/resource',
                    generator: {
                        filename: '[name][ext]'
                    }
                },
                {
                    test:/\.png$/,
                    type: 'asset/resource',
                    generator: {
                        filename: '[name][ext]'
                    }
                },
        ]
    }
}