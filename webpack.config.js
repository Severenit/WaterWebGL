var path=require('path');
module.exports={
  context: __dirname + path.sep + "src",
  entry: {
    water:"."+path.sep+"index-water",
  },
  output:{
    filename:"[name].js",
    path:__dirname+path.sep+"build"
  },
  devtool:"source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(frag|vert)$/,
        loader: 'webpack-glsl'
      }
    ]
  }
}
