

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.SERVER_URI_LINK);
const db = client.db("SportsManagement");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
     //...other options
  emailAndPassword: {
    enabled: true,
  },
    client,
  }),

 
});
