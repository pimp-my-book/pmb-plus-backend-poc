import {hello} from "./query";
import {addUniversity, addDegree, addCourse, addBook} from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    },
    Mutation: {
        addUniversity: (root, {input: args}, context) => addUniversity({input: args}, context),
        addDegree: (root, {input: args}, context) => addDegree({input: args}, context),
        addCourse: (root, {input: args}, context) => addCourse({input: args}, context),
        addBook: (root, {input: args}, context) => addBook({input: args}, context),
    }
        
}
