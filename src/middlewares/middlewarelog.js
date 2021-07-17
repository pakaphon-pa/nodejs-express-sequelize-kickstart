import morgan, { StreamOptions } from 'morgan'

import Logger from "../configs/logger"

const stream = {
   write : (message) => Logger.http(message)
}


const middlewareLog = morgan(
   ':method :url :status :res[content-length] - :response-time ms',
   {stream}
)

export default middlewareLog