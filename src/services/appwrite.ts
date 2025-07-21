import { Account, Client, Databases, Storage } from "appwrite";

export const DATABASE_ID = "685b1e61002166b5e7f1";
export const APPWRITE_USER_ID = "6860549600322ed00d50";
export const APPWRITE_TRIPS_ID = "685dacd800306a746d39";
export const APPWRITE_BUCKET_ID = "685da78600069ebc659b";
export const UNPLASH_KEY = "G4rRAXG8zXlNRmU8qBL2XA2ZgTgzpuAb-l4ULJMMDnQ";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APP_APPWRITE_ENDPOINT!)
  .setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID!);

export const account = new Account(client);

export const databases = new Databases(client);

export const storage = new Storage(client);
