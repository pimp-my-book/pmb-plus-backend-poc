// List of all mutations
import * as dynamoDBlib from "../../libs/dynamodb-lib";
import uuid from "uuid";

//ADD BOOK
export const addBook = async (args, context) => {
    const params = {
        TableName: process.env.MarketPlaceDB,
        Item: {
            objectId: uuid.v1(),
            objectName: args.title,
            author: args.author,
            ISBN: args.ISBN
        }
    }

    try{
        await dynamoDBlib.call("put", params);

        return {
            objectId: params.Item.objectId,
            title: params.Item.objectName,
            author: args.author,
            ISBN: args.ISBN
        }
    } catch(e){
        return e
    }
    
}

//ADD UNIVERSTY 
export const addUniversity = async ({input: args}, context) => {
    const params = {
        TableName: process.env.MarketPlaceDB,
        Item: {
            objectId: `uni-${uuid.v1()}`,
            objectName: "university",
            name: args.name,
            shortName: args.shortName,
            degrees: args.degrees, 
            courses: args.courses
        }

    }

    console.log(params)

    try {
        await dynamoDBlib.call("put", params);

        return {
            ID: params.Item.objectId,
            name: args.name,
            shortName: args.shortName,
            degrees: args.degrees, 
            courses: args.courses
        } 
    } catch(e){
        return e;
    }
} 

//ADD DEGREE
export const addDegree = async ({input: args}, context) => {
    const params = {
        TableName: process.env.MarketPlaceDB,
        Item: {
            objectId: `degree-${uuid.v1()}`,
            objectName: "degree",
            degreeName: args.degreeName,
            courses: args.courses
        }

    }

    try {
        await dynamoDBlib.call("put", params);

        return {
            objectId: params.Item.objectId,
            objectName: params.Item.objectName,
            degreeName: args.degreeName,
            courses: args.courses
        }
    } catch(e){
           return e;
    }
}