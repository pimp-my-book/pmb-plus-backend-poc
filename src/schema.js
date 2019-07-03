//This is the schema file for the GraphQL API.

const schema = `

"""
addUniversityInput
"""
input addUniversityInput{
    
    universityName: String!
    shortName: String!
    degrees: [String]!
    courses: String!
}

"""
addCoursesInput
"""
input addCoursesInput {
    
    name: String!
    shortName: String!
    degrees: [String]!
}


"""
addDegreeInput
"""
input addDegreeInput{
    
    degreeName: String!
    courses: String!
}

"""
Add Book input

"""
input addBookInput {
    
    productName: String!
    productDescription: String!
    
    price: String!
    vendor: String!
    image: String!
    
    title: String!
    author: String!
    ISBN: String!
    grade: String!
    courses: [String]!
    univeristies: [String]!
}


"""
Degrees
"""
type Degree {
    ID: Int!
    degreeName: String!
    courses: [Course]!
}

"""
University
"""
type University {
    ID: Int!
    universityName: String!
    shortName: String!
    degrees: [Degree]!
    courses: [Course]!
}




"""
Course
"""
type Course {
    ID: Int!
    name: String!
    shortName: String!
    degrees: [Degree]!
}




"""
Buying List Type
"""
type BuyingList {
    ID: Int!
    store: String!
    books:[BookList]!
}

"""
Book List object to enter books into the buying list
"""
type BookList {
    ID: String!
    title: String!
    author: String!
    ISBN: String!
    course: Course!
    degree: Degree!
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
    image: String!
    
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
    image: String!
    productType: String!
    title: String!
    author: String!
    ISBN: String!
    grade: String!
    courses: [Course]!
    univeristies: [University]!
}

type Mutation {
    addUniversity(input: addUniversityInput): University
    addCourse(input: addCoursesInput): Course
    addDegree(input: addDegreeInput): Degree
    addBook(input:addBookInput) : Book
    addBooks(input: [addBookInput]): Book
}

"""
A hello world Query
"""
type Query {
     hello: String!
}



`

export {schema}
