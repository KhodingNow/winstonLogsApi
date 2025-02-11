
const winston = require('winston')
const {combine, timestamp, json, prettyPrint, errors} = winston.format

winston.loggers.add('OrderLogger', { 
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
            new winston.transports.File({filename: "orders.log"}),
        ],
        defaultMeta: {service: 'OrderService'}
})

winston.loggers.add('PaymentLogger', {
    format: json(),
    transports:[
        new winston.transports.File({filename: 'payments.log'})
    ],
    defaultMeta: {service: 'PaymentService'}

})
