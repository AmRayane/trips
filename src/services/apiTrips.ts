import {
  databases,
  APPWRITE_TRIPS_ID,
  DATABASE_ID,
  storage,
  APPWRITE_BUCKET_ID,
} from "./appwrite";
import {
  MAX_TRIPS_PAGE,
  type PaginatedTripsResponse,
  type Trip,
} from "../types";
import { ID, Query } from "appwrite";
import {} from "@tanstack/react-query";

export async function getTrips(page: number): Promise<PaginatedTripsResponse> {
  const offset = MAX_TRIPS_PAGE * (page - 1);
  const resopnse = await databases.listDocuments(
    DATABASE_ID,
    APPWRITE_TRIPS_ID,
    [
      Query.limit(MAX_TRIPS_PAGE),
      Query.offset(offset),
      Query.orderDesc("$createdAt"),
    ],
  );
  return {
    trips: resopnse.documents as unknown as SimpleTrip[],
    total: resopnse.total,
  };
}

export async function getTripById(id: string): Promise<Trip> {
  const response = await databases.getDocument(
    DATABASE_ID,
    APPWRITE_TRIPS_ID,
    id,
  );
  return response as unknown as Trip;
}

export async function createTrip(trip: Trip): Promise<void> {
  const imageFile = trip.image[0];
  let iamgeURL;
  if (imageFile instanceof File) {
    const uploadFile = await storage.createFile(
      APPWRITE_BUCKET_ID,
      ID.unique(),
      imageFile,
    );
    iamgeURL = storage.getFileView(APPWRITE_BUCKET_ID, uploadFile.$id);
  } else {
    iamgeURL = trip.image;
  }

  await databases.createDocument(DATABASE_ID, APPWRITE_TRIPS_ID, ID.unique(), {
    name: trip.name,
    country: trip.country,
    price: parseInt(trip.price.replace("$", "")),
    numberOfDays: parseInt(trip.numberOfDays),
    budget: trip.budget,
    groupType: trip.groupeType,
    interests: trip.interests,
    location: trip.location,
    travelStyle: trip.travelStyle,
    imageUrl: iamgeURL,
    description: trip.description,
    itinerary: trip.itinerary,
    bestTimeToVisit: trip.bestTimeToVisit,
  });
}
