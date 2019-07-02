// List of all mutations
import * as dynamoDBlib from "../../libs/dynamodb-lib";
import uuid from "uuid";

//ADD BOOK
export const addBook = async ({input: args}, context) => {
    const params = {
        TableName: process.env.MarketPlaceDB,
        Item: {
            objectId: `book-${uuid.v1()}`,
            objectName: "book",
            author: args.author,
            ISBN: args.ISBN,
            productName: args.title,
            productDescription: args.productDescription,
            dateUploaded: args.dateUploaded,
            price: args.price,
            vendor: args.vendor,
            image: args.image,
            productType: "book",
            title: args.title,
            author: args.author,
            
            grade: args.grade,
            courses: args.courses,
            univeristies: args.univeristies,
        }
    }

    try{
        await dynamoDBlib.call("put", params);

        return {
            objectId: params.Item.objectId,
            objectName: params.Item.objectName,
            author: args.author,
            ISBN: args.ISBN,
            productName: args.title,
            productDescription: args.productDescription,
            dateUploaded: args.dateUploaded,
            price: args.price,
            vendor: args.vendor,
            image: args.image,
            productType: "book",
            title: args.title,
            author: args.author,
            
            grade: args.grade,
            courses: args.courses,
            univeristies: args.univeristies,
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

//ADD course
export const addCourse = async ({input: args}, context) => {
    const params = {
        TableName: process.env.MarketPlaceDB,
        Item: {
            objectId: `course-${uuid.v1()}`,
            objectName: "course",
            name: args.name,
            shortName: args.shortName,
            degrees: args.degrees
        }

    }

    try {
        await dynamoDBlib.call("put", params);

        return {
            objectId: params.Item.objectId,
            objectName: params.Item.objectName,
            name: args.name,
            shortName: args.shortName,
            degrees: args.degrees
        }
    } catch(e){
           return e;
    }
}

