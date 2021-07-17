import express from 'express'
import middlewareLog from './middlewares/middlewarelog'
import Logger from './configs/logger'
import constant from './configs/constant'

const app = express()

app.use(middlewareLog)

app.get('/healthz', (req, res) => {
   Logger.info('OK !!!')
   res.status(200).send('OK !!!')
})

app.get('/logger', (req, res) => {
   Logger.error('This is an error ')
   Logger.warn('This is an warn log')
   Logger.info('This is an info log')
   Logger.http('This is an info log')
   Logger.debug('This is an debug log')
   
   res.status(200).send('Hello world')
})

app.listen(constant.PORT, () => {
   Logger.debug(`Server is running @ http://localhost:${constant.PORT}`)
})
