'use strict'

const Mongoose = require('mongoose')
let mongoose = null
const chalk = require('chalk')

const connected = chalk.bold.cyan
const error = chalk.bold.yellow
var disconnected = chalk.bold.red
var termination = chalk.bold.magenta

module.exports = async function setupDatabase (uri, config) {

    if (!mongoose) {
        mongoose = Mongoose.connect(uri, config)

        Mongoose.connection.on('open', () => {
            console.log(connected('Mongoose defaults connection is open to ', uri))
        })

        Mongoose.connection.on('error', (err) => {
            console.log(error('Mongoose default connection has occured' + err + ' error'))
        })

        Mongoose.connection.on('disconnected', () => {
            console.log(disconnected('Mongoose default connection is disconnected'))
        })

        
        process.on('SIGINIT', function () {
            Mongoose.connection.close(function () {
            console.log(termination('Mongoose default connection is disconnected due to application termination'))
            process.exit(0)
            })
        })

    }
    return  mongoose

}
