import { ID, Query } from "appwrite";
import { databases, storage } from "./appwrite";
import type { Inputs, PaginatedUsersResponse, User } from "../types";
import { MAX_PAGE } from "../types";
const today = new Date();
today.setHours(0, 0, 0, 0);
const isToday = "2025-06-26T23:00:00.000Z";

export async function getTodaysUser(): Promise<User[]> {
  const response = await databases.listDocuments(
    import.meta.env.VITE_APP_DATABASE_ID,
    import.meta.env.VITE_APP_APPWRITE_USER_ID,
    [Query.greaterThan("$createdAt", isToday)],
  );
  return response.documents as unknown as User[];
}

export async function getUsers(
  page: number = 1,
): Promise<PaginatedUsersResponse> {
  const offset = MAX_PAGE * (page - 1);
  const response = await databases.listDocuments(
    import.meta.env.VITE_APP_DATABASE_ID,
    import.meta.env.VITE_APP_APPWRITE_USER_ID,
    [
      Query.limit(MAX_PAGE),
      Query.offset(offset),
      Query.orderDesc("$createdAt"),
    ],
  );
  return {
    users: response.documents as unknown as User[],
    total: response.total as number,
  };
}

export async function deleteUser($id: string) {
  await databases.deleteDocument(
    import.meta.env.VITE_APP_DATABASE_ID,
    import.meta.env.VITE_APP_APPWRITE_USER_ID,
    $id,
  );
}

export async function addNewUser(user: Inputs): Promise<void> {
  const imageFile = user.image[0];
  const uploadedFile = await storage.createFile(
    import.meta.env.VITE_APP_APPWRITE_BUCKET_ID,
    ID.unique(),
    imageFile,
  );

  const imageURL = storage.getFileView(
    import.meta.env.VITE_APP_APPWRITE_BUCKET_ID,
    uploadedFile.$id,
  );

  await databases.createDocument(
    import.meta.env.VITE_APP_DATABASE_ID,
    import.meta.env.VITE_APP_APPWRITE_USER_ID,
    ID.unique(),
    {
      name: user.name,
      email: user.email,
      status: user.status,
      image: imageURL,
    },
  );
}
