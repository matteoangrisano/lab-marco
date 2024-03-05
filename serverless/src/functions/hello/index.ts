import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  environment: {
    TABLE_NAME: "marco-serverless",
  },
  events: [
    {
      http: {
        method: "post",
        path: "createsong",
      },
    },
  ],
};
