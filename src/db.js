const Sequelize = require('sequelize')
const BookModel = require('./models/Book')

const sequelize = new Sequelize(
    'pmbpluspoc',
     'root',
    '6lQ0L%6J2fttg6',
    {
        dialect: 'mysql',
        dialectOptions: {connectTimeout: 6000000},
        timeout: 60000,
        host: "pmbpluspoc.cluster-cnzzwx7w7f5y.us-east-1.rds.amazonaws.com",
        port: "3306",
        pool: {
            max: 10,
    min: 0,
    acquire: 30000,
    idle: 100000
        }
    },

    
)

const Book = BookModel(sequelize, Sequelize)
const Models = {Book}

const connection = {}

module.exports = async () => {
    if (connection.isConnected){
        console.log('=> using existing connection')
        return Models
    }

    await sequelize.sync()
    await sequelize.authenticate()
    connection.isConnected = true
    console.log('=> Create a new connection')
    return Models
}