import { Account, Client, Databases, Storage } from "appwrite";

const APPWRITE_PROJECT_ID = "685a82b70036ab21d12a";
export const DATABASE_ID = "685b1e61002166b5e7f1";
export const APPWRITE_USER_ID = "6860549600322ed00d50";
export const APPWRITE_TRIPS_ID = "685dacd800306a746d39";
export const APPWRITE_BUCKET_ID = "685da78600069ebc659b";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);

export const databases = new Databases(client);

export const storage = new Storage(client);
