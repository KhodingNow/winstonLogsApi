require('./loggers')
const winston = require('winston')

const PaymentLogger = winston.loggers.get('PaymentLogger')
const OrderLogger = winston.loggers.get('OrderLogger')

//PaymentLogger.info('Payment received')
//OrderLogger.error('Order failed')

// LOG PROFILING

let requestHandler = (path) => {
    const profiler = PaymentLogger.startTimer()

    // request processing
    const ONE_BILLION = 1000_000_000
    for (let i = 0; i <ONE_BILLION; i++) {
        j = i*2
    }

    profiler.done({message: 'Request to ${path} processed'})
}

requestHandler("/payment")
