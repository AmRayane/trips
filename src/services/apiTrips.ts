import {
  databases,
  APPWRITE_TRIPS_ID,
  DATABASE_ID,
  storage,
  APPWRITE_BUCKET_ID,
} from "./appwrite";
import type { SimpleTrip } from "../types";
import { ID } from "appwrite";

export async function createTrip(trip: SimpleTrip): Promise<void> {
  const imageFile = trip.image[0];
  const uploadFile = await storage.createFile(
    APPWRITE_BUCKET_ID,
    ID.unique(),
    imageFile
  );
  const iamgeURL = storage.getFileView(APPWRITE_BUCKET_ID, uploadFile.$id);

  await databases.createDocument(DATABASE_ID, APPWRITE_TRIPS_ID, ID.unique(), {
    country: trip.country,
    numberOfDays: parseInt(trip.numberOfDays),
    name: trip.name,
    travelStyle: trip.travelStyle,
    intersets: trip.intersets,
    budget: trip.budget,
    price: parseInt(trip.price),
    imageUrl: iamgeURL,
    location: trip.location,
    groupType: trip.groupType,
  });
}
