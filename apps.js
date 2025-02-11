//const { debug } = require('winston')
const winston = require('winston')
require('./loggers')
//const {combine, timestamp, json, prettyPrint, errors} = winston.format


const logger = winston.createLogger({
    level: 'info', 
    format: combine(
        timestamp(),
        
        errors({stack: true}),
        //printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
        json(),        
        prettyPrint()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: "app.log", level: 'error'}),
    ]
})

const requestLog = {method: "GET", isAuthenticated: false }
const childLoger = logger.child(requestLog)


//logger.info("An info log", requestLog)
//logger.error("An error log", requestLog)
 

childLoger.info("An info log")
childLoger.error('An error log', new Error('504 Gateway timeout'))




