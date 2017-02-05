module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  }, // compiled file
  module:{
    loaders:[{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:{
        presets:['es2017', 'react']
      }
    }]
  }
}
