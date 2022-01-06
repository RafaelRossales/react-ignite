const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV != 'production';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// Configuranções da aplicação
module.exports = {
    mode: isDevelopment ? 'development':'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry:path.resolve(__dirname,'src', 'index.tsx'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx','.ts','.tsx']
    },
    plugins:[
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public','index.html')
        })
    ].filter(Boolean),
    devServer:{
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.(j|t)sx$/, // verifica o tipo do arquivo
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        plugins:[
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test:/\.scss$/, // verifica o tipo do arquivo
                exclude:/node_modules/,
                use:['style-loader','css-loader','sass-loader']
            }
        ],
    }
};