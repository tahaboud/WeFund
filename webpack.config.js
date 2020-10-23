  module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        // ...
        {
          test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
          use: [
              'file-loader?name=assets/[name].[ext]'
          ]
      },
        
  
      ]
    }
  }