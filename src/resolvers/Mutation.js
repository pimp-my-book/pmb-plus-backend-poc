const connectToDatabase = require('../db')

function HTTPError (statusCode, message){
    const error = new Error(message)
    error.statusCode = statusCode
    return error
}

export const createBook = async (args, context) => {
    try{
        console.log("heello1")
        console.log(await connectToDatabase())
        const {Book} = await connectToDatabase()
        console.log("heello2")
        const book = await Book.create(args.title, args.author, args.ISBN)
        console.log("heello3")
        return book;
    } catch(error){
        return  console.log(error)
        
    }
    
}