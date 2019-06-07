const connectToDatabase = require('../db')

function HTTPError (statusCode, message){
    const error = new Error(message)
    error.statusCode = statusCode
    return error
}

export const createBook = async (args, context) => {
    try{
        const {Book} = await connectToDatabase()
        const book = await Book.create(args)
        console.log(book)
        return {
             book
        };
    } catch(error){
        return {
            error
        }
    }
    
}