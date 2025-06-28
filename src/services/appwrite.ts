import { Account, Client, Databases } from "appwrite";

const APPWRITE_PROJECT_ID = "685a82b70036ab21d12a";
export const DATABASE_ID = "685b1e61002166b5e7f1";
export const APPWRITE_USER_ID = "685b1fed0018e0bc801c";
export const APPWRITE_TRIPS_ID = "685dacd800306a746d39";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);

export const databases = new Databases(client);
