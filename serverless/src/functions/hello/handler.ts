import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient();

const handler = async function (event, context) {
  console.log("with event: ", event);
  console.log("with event.body: ", event.body);

  let songData = JSON.parse(event.body);
  let tableName = process.env.TABLE_NAME;

  try {
    const params = {
      TableName: tableName,
      Item: {
        id: {
          S: songData.id,
        },
        title: {
          S: songData.title,
        },
        album: {
          S: songData.album,
        },
      },
      ConditionExpression: "attribute_not_exists(id)",
    };

    const command = new PutItemCommand(params);
    await client.send(command);

    return { statusCode: 200, body: JSON.stringify(songData) };
  } catch (error) {
    console.log(error.message);
    return { statusCode: 500, body: JSON.stringify(error.message) };
  }
};

export const main = handler;
