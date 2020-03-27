const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
}

module.exports = {
    externals: { 
      paths: PATHS
    },

    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        /*publicPath: '/'*/
    },

    module: {
             rules: [
               {
                 test: /\.js$/,
                 exclude: /(node_modules|bower_components)/,
                 use: {
                   loader: 'babel-loader',
                 }
               }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
               
              }, {
                   test: /\.scss$/,
                   use: [
                       'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        // options: {
                        //     sourceMap: true
                        // }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            // sourceMap: true,
                            config: {path: 'src/js/postcss.config.js'}
                        }
                    }, {
                      loader: 'sass-loader',
                      // options: {
                      //     sourceMap: true
                      // }
                    }
                   ]
               },
               {
                   test: /\.css$/,
                   use: [
                    MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader',
                      // options: {
                      //     sourceMap: true
                      // }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            // sourceMap: true,
                            config: {path: 'src/js/postcss.config.js'}
                        }
                    }
                   ]
               }
             ]

           }, //module

           plugins: [
            new MiniCssExtractPlugin({
              // Options similar to the same options in webpackOptions.output
              // all options are optional
              filename: `${PATHS.assets}css/[name].css`
            }),
            new HTMLWebpackPlugin({
              hash: false,
              template: `${PATHS.src}/index.html`,
              filename: './index.html'
            }),
            new CopyWebpackPlugin([
              { from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},           
              { from: `${PATHS.src}/static`, to: ''},           
            ])
          ],
}