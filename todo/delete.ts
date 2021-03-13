'use strict';

import { DynamoDB } from 'aws-sdk';

const dynamoDb  = new DynamoDB.DocumentClient();

module.exports.delete = (event, context, callback) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            edgeId: event.pathParameters.todoId,
        },
    };

    dynamoDb.delete(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t delete the item.',
            });
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                "message" : `delete ${event.pathParameters.todoId} data success`
            }),
        };
        callback(null, response);
    });
};
