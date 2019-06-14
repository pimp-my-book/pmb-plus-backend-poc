
import {Sequelize} from 'sequelize'
import BookModel from './models/Book'
const sequelize = new Sequelize(
    'testdb',
     'root2',
    'G*o62%LhZFrvnR',
    {
        dialect: 'mysql',
        dialectOptions: {
            connectTimeout: 30000,
            ssl: 'Amazon RDS'
            },
        timeout: 30000,
        host: "pmbplustest.cnzzwx7w7f5y.us-east-1.rds.amazonaws.com",
        port: "3306",
        pool: {
            max: 5,
    min: 1,
    acquire: 30000,
    idle: 30000
        },
        
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