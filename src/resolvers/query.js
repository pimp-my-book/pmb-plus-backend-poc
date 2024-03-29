import * as dynamoDBLib from "../../libs/dynamodb-lib";

export const hello = (args, context) => {
    return "Your GraphQL API is now LIVE!🎈 "
}

export const getBooksByVendor = async (args, context) =>  {
  const params = {
      TableName: process.env.MarketPlaceDB,
     KeyConditionExpression: "vendor = :vendor",
     ExpressionAttributeValues: {
         ":vendor": args.vendor
     }
  }

  try {
      const result = await dynamoDBLib.call("query", params);
      if (result.Item){
          return result.Item;
      } else {
          return "You have no products"
      }
  } catch (e){
      return e; 
  }
}