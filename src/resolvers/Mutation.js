const connectToDatabase = require('./db')

function HTTPError (statusCode, message){
    const error = new Error(message)
    error.statusCode = statusCode
    return error
}

export const createBook = async (args, context) => {
    try{
        const {Book} = await connectToDatabase()
        const book = await Book.create(args.title, args.author, args.ISBN)
        return {
            book

        }
    } catch(error){
        return {
            error
        }
    }
    
}