import {hello} from "./query";
import {addUniversity} from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    },
    Mutation: {
        addUniversity: (root, {input: args}, context) => addUniversity({input: args}, context)
    }
}
