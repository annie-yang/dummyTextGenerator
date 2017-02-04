module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
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
