//This is the schema file for the GraphQL API.

const schema = `



"""
Universisties
"""

type Universisties {
    ID: Int!
    name: String!
    shortName: String!
}





"""
Courses
"""

type Courses {
    ID: Int!
    name: String!
    shortName: String!
    univeristy: Universisties!
}


"""
Buying List Type
"""

type BuyingList{
    ID: Int!
    store: String!
    books:[BookList]!
}

"""
Book List object to enter books into the buying list
"""

type BookList {
    title: String!
    author: String!
    ISBN: String!

}

"""
Vendor Type
"""

type Vendor {
    ID: Int!
    vendorName: String!
    vendorDescription: String!
    vendorWebsite: String
    vendorAddress: String!
    vendorEmail: String!
    inventory: [Product]!
    buyingList: [BuyingList]!
}

"""
Product interface
"""
interface Product {
    ID: Int!
    productName: String!
    productDescription: String!
    dateUploaded: String!
    price: String!
    productType: String!
    vendor: String!
}

"""
A book type that is an extension of a product
"""
type Book implements Product {
    ID: Int!
    productName: String!
    productDescription: String!
    dateUploaded: String!
    price: String!
    vendor: String!
    productType: String!
    title: String!
    author: String!
    ISBN: String!
    grade: String!
    courses: [Courses]!
    univeristies: [Univeristies]!
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
