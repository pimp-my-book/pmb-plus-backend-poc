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
        const book = await Book.create(args)
        console.log("heello3")
        console.log(book)
        return book;
    } catch(error){
        return  console.log(error)
        
    }
    
}
