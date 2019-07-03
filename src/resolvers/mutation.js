// List of all mutations
import * as dynamoDBlib from "../../libs/dynamodb-lib";
import uuid from "uuid";
import aws from "aws-sdk";
import XLSX from "xlsx";

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
            dateUploaded: Date.now(),
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
            dateUploaded: Date.now(),
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


//Add books
export const addBooks = async (args, context) => {
    const s3 = new aws.S3({
        signatureVersion: 'v4',
        region: 'us-east-1'
    });

    const s3Params = {
        Bucket: "pmb-plus-backend-poc-dev-attachmentsbucket-z5ee6l5d2lx0",
        Key: args.fileName,
        Expires: 60,
        ContentType: args.fileType,
        ACL: 'public-read'
    };


    const signedRequest = await s3.getSignedUrl('putObject', s3Params);
    const url = `https://${s3Params.Bucket}.s3.amazonaws.com/${s3Params.Key}`
    
    console.log(signedRequest)

    /*
      { SheetNames: [ 'Sheet1' ],
  Sheets: { Sheet1: { A1: [Object], B1: [Object], '!ref': 'A1:B1' } }
}
    */
    //const books = XLSX.utils.sheet_to_json(url);
    //const books = XLSX.read(url);

    console.log(books.Sheets.Sheet1)

    return{
        signedRequest,
        url
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

