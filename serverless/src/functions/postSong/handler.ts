const handler = async function (event, context) {
  try {
    return { statusCode: 200, body: JSON.stringify("ciao sono la function2") };
  } catch (error) {
    return { statusCode: 400, body: JSON.stringify(error) };
  }
};

export const main = handler;
