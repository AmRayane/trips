import { Query } from "appwrite";
import { databases, APPWRITE_USER_ID, DATABASE_ID } from "./appwrite";
import type { User } from "../types";
import { MAX_PAGE } from "../types";
const today = new Date();
today.setHours(0, 0, 0, 0);
const isToday = "2025-06-26T23:00:00.000Z";

export async function getTodaysUser(): Promise<User[]> {
  const response = await databases.listDocuments(
    DATABASE_ID,
    APPWRITE_USER_ID,
    [Query.greaterThan("$createdAt", isToday)]
  );
  return response.documents as unknown as User[];
}

export async function getUsers(page: number = 1): Promise<User[]> {
  const offset = MAX_PAGE * (page - 1);
  const response = await databases.listDocuments(
    DATABASE_ID,
    APPWRITE_USER_ID,
    [Query.limit(MAX_PAGE), Query.offset(offset), Query.orderDesc("$createdAt")]
  );
  return response.documents as unknown as User[];
}

export async function deleteUser(): Promise<void> {}

export async function addNewUser(user: User): Promise<void> {
  console.log(user);
}
