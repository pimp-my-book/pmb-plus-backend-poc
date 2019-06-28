//This is the schema file for the GraphQL API.

const schema = `

"""
Product interface
"""
interface Product {
    ID: Int!
    productName: String!
    productDescription: String!
    dateUploaded: String!
    price: String!

}


type Book {
    ID: Int!
    title: String!
    author: String!
    ISBN: String!
}

type Mutation {
    createBook(title: String!, author: String!, ISBN: String!): Book
}

"""
A hello world Query
"""
type Query {
     hello: String!
}



`

export {schema}
