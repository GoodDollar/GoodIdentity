// @flow
import cors from 'cors'
import { Router } from 'express'
import bodyParser from 'body-parser'
import pino from 'express-pino-logger'
import logger from '../imports/pino-logger'
import type { $Request, $Response, NextFunction } from 'express'
import { setup as addGunMiddlewares, GunDBPrivate  } from './gun-middleware'



export default (app: Router, env: any) => {
  // parse application/x-www-form-urlencoded
  // for easier testing with Postman or plain HTML forms
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

  // parse application/json
  app.use(bodyParser.json())

  app.options(cors())
  app.use(cors())
  app.use(pino({ logger }))
  addGunMiddlewares(app)

  app.use((error, req, res, next: NextFunction) => {
    const log = req.log.child({ from: 'errorHandler' })
    log.error(error)
    res.status(400).json({ message: error.message })
  })
}