'use strict';

import { DynamoDB } from 'aws-sdk';

const dynamoDb = new DynamoDB.DocumentClient()

module.exports.get = (event, context, callback) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            todoId: event.pathParameters.todoId,
        },
    };

    dynamoDb.get(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t fetch the config item.',
            });
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Item.content),
        };
        callback(null, response);
    });
};