import { databases, APPWRITE_TRIPS_ID, DATABASE_ID } from "./appwrite";
import type { Trip } from "../types";

export async function getTrips(): Promise<Trip[]> {
  const response = await databases.listDocuments(
    DATABASE_ID,
    APPWRITE_TRIPS_ID
  );
  return response.documents as unknown as Trip[];
}

export async function getTrip(id: string): Promise<Trip> {
  const response = await databases.getDocument(
    DATABASE_ID,
    APPWRITE_TRIPS_ID,
    id
  );
  return response as unknown as Trip;
}
