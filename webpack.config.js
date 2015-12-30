var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

module.exports = {
  // entry: './js/entry.js',
  entry: {
    // 'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server',
    // ui:'./src/modules/widget/index.js',
    app:'./src/app.js',
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'js/[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.(woff|eot|ttf)$/i,
      loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      loader: 'url-loader?limit=10000&name=./images/[name].[ext]'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'jsx?harmony', 'babel?optional=runtime', 'babel-loader?stage=0'],
      exclude: /node_modules/
    }, {
      test: /\.js?$/,
      loaders: ['babel-loader?stage=0'],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    // commonsPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.MinChunkSizePlugin({}),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    // 压缩 React
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
    //css提取
    new ExtractTextPlugin("css/[name].css"),
    function() {
      this.plugin("done", function(stats) {
        require("fs").writeFileSync(
          path.join(__dirname, "", "stats.json"),
          JSON.stringify(stats.toJson()));
      });
    }
  ]
};