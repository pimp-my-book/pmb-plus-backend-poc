const schema = `

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