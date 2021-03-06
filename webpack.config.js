const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

const config = {
  entry: {
    popup: path.join(__dirname, 'src/popup.jsx'),
    options: path.join(__dirname, 'src/options.jsx'),
    content: path.join(__dirname, 'src/content.js'),
    background: path.join(__dirname, 'src/background.js')
  },
  output: { path: path.join(__dirname, 'dist'), filename: '[name].js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]!static'
      }
    ]
  },
  resolve: {
    aliasFields: ['browser', 'browser.esm'],
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}

module.exports = config
