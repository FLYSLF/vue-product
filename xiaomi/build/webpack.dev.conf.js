'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


 
//配置接口
var express = require("express");
var app = express();

var find_itemData = require("../src/data/find_item");

var listData = require("../src/listdata.json");
//分类详情
var Detailsc = require("../src/data/Detailsc.json");
var Detailsc_bottom = require("../src/data/Details_bottom.json");

var serice = require("../src/data/Serice1.json");
//购物车更多 json数据
var cart_itemData = require("../src/data/cart_item.json");

//详情评论数据
var details_comment = require("../src/data/details_comment.json");
//详情图片
var details_img = require("../src/data/details_img.json");
//更多推荐
var details_more = require("../src/data/details_more.json");

var apiRoutes = express.Router();
app.use("/api",apiRoutes);

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
  	before(app){
  		app.get("/api/listdata",function(req,res){
  			res.json({
  				data:listData
  			});
  		});
  		app.get("/api/Detailsc",function(req,res){
  			res.json({
  				data:Detailsc
  			});
  		});
  		app.get("/api/Detailscbottom",function(req,res){
  			res.json({
  				data:Detailsc_bottom
  			});
  		});
  		app.get("/api/findItem",function(req,res){
  			res.json({
  				data:find_itemData
  			});
  		});
  		app.get("/api/serice",function(req,res){
  			res.json({
  				data:serice
  			});
  		});
      app.get("/api/cartData",function(req,res){
  			res.json({
  				data:cart_itemData
  			});
      });
      app.get("/api/detailsComment",function(req,res){
  			res.json({
  				data:details_comment
  			});
      });
      app.get("/api/detailImg",function(req,res){
  			res.json({
  				data:details_img
  			});
      });
      app.get("/api/detailMore",function(req,res){
  			res.json({
  				data:details_more
  			});
      });
  	},
    clientLogLevel: 'warning',
    historyApiFallback:{
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
