import path from 'path'
import express from 'express'
import conf from './config/server.config'
import { GunDBPublic } from './middleware/gun-middleware'
import middlewares from './middleware/server-middlewares'



const app = express()

const DIST_DIR = __dirname

const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

middlewares(app, 'prod')

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})

