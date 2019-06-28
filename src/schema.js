//This is the schema file for the GraphQL API.

const schema = `



"""
Universisties
"""

type Universities {
    ID: Int!
    name: String!
    shortName: String!
}


"""
addUniversityInput
"""

input addUniversityInput{
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
    univeristy: Universities!
}


"""
addCoursesInput
"""
input addCoursesInput {
    ID: Int!
    name: String!
    shortName: String!
    univeristy: String!
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
    course: Courses!
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
Add Book input

"""

input addBookInput {
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
    courses: [String]!
    univeristies: [String]!
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
    univeristies: [Universities]!
}

type Mutation {
    addUniversity(input: addUniversityInput!): Universities
    addCourse(input: addCoursesInput!): Courses
    addBook(input: addBookInput!) : Book
}

"""
A hello world Query
"""
type Query {
     hello: String!
}



`

export {schema}
