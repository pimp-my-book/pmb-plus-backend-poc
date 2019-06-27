import * as dynamoDBlib from "../../libs/dynamodb-lib";
import uuid from "uuid";


export const createBook = async (args, context) => {
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
