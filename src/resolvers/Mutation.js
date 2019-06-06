const connectToDatabase = require('./db')

function HTTPError (statusCode, message){
    const error = new Error(message)
    error.statusCode = statusCode
    return error
}

export const createBook = (args, context) => {
    return "book mut"
}