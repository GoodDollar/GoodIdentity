/* eslint-disable import/no-extraneous-dependencies */
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import conf from './config/server.config'
import config from './config/webpack.dev.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import middlewares from './middleware/server-middlewares'
import { GunDBPublic } from './middleware/gun-middleware'


const app = express()

const DIST_DIR = __dirname

const HTML_FILE = path.join(DIST_DIR, 'index.html')

const compiler = webpack(config)

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))

app.use(webpackHotMiddleware(compiler))

middlewares(app, 'dev')
// app.get("*", (req, res, next) => {
//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
//     if (err) {
//       return next(err)
//     }
//     res.set("content-type", "text/html")
//     res.send(result)
//     res.end()
//     return false
//   })
// })

console.log({ conf })
const PORT = conf.port || 3003

const server = app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})
