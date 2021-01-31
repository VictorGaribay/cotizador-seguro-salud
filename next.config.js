//pemrmitira importa > import image from 'url'
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const dotEnvResult = require('dotenv').config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}
module.exports = withCSS(
  withSass({
    env: {
      BASE_URL: process.env.BASE_URL
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })

      return config
    }
  })
)
