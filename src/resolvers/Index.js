import {hello} from "./Query";
impoer {createBook} from "./Mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    },
    Mutation: {
        createBook: (root, args, context) => createBook(args, context)
    }
}