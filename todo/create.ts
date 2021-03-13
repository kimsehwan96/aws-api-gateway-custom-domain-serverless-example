'use strict'

import { DynamoDB } from 'aws-sdk';
import { uuid } from 'uuidv4';

const dynamoDb  = new DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
    const timestamp = new Date().getTime()
    const data = JSON.parse(event.body)
    if (typeof data.content !== 'string'){
        console.error("Validation failed");
        callback(new Error("can't parse body"));
        return
    }

    const params =  {
        TableName : process.env.DYNAMODB_TABLE,
        Item: {
            todoId: uuid(),
            content: data.content,
            createAt: timestamp,
            updatedAt: timestamp
        }
    }

    dynamoDb.put(params, (error, result) => {
        if (error)  {
            console.error(error);
            callback(new Error('Cound not put config item'));
            return
        }

        const response = {
            statusCode:200,
            body: JSON.stringify(params.Item)
        }
        callback(null, response)
    })
}
