import { ID, OAuthProvider, Query } from "appwrite";
import { account, APPWRITE_USER_ID, DATABASE_ID, databases } from "./appwrite";
import type { User } from "../types";
import { redirect } from "react-router";

export async function loginWithGoogle(): Promise<void> {
  account.createOAuth2Session(
    OAuthProvider.Google,
    "http://localhost:5173/auth-callback"
  );
}

export async function logoutUser() {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error("Error during logout:", error);
  }
}

export async function getExitingUser(id: string): Promise<User | undefined> {
  const { documents, total } = await databases.listDocuments(
    DATABASE_ID,
    APPWRITE_USER_ID,
    [Query.equal("accountId", id)]
  );
  if (total > 0) return documents as unknown as User;
}

export async function storeUserData() {
  const user = await account.get();
  if (!user) throw new Error("User not found");

  const { providerAccessToken } = (await account.getSession("current")) || {};
  const profilePicture = providerAccessToken
    ? await getGooglePicture(providerAccessToken)
    : null;

  const createdUser = await databases.createDocument(
    DATABASE_ID,
    APPWRITE_USER_ID,
    ID.unique(),
    {
      name: user.name,
      email: user.email,
      image: profilePicture,
      joinedAt: new Date().toISOString(),
      accountId: user.$id,
    }
  );

  if (!createdUser.$id) redirect("/login");
}

const getGooglePicture = async (accessToken: string) => {
  try {
    const response = await fetch(
      "https://people.googleapis.com/v1/people/me?personFields=photos",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (!response.ok) throw new Error("Failed to fetch Google profile picture");

    const { photos } = await response.json();
    return photos?.[0]?.url || null;
  } catch (error) {
    console.error("Error fetching Google picture:", error);
    return null;
  }
};

export async function getUser() {
  try {
    const user = await account.get();
    if (!user) return redirect("/login");

    const { documents } = await databases.listDocuments(
      DATABASE_ID,
      APPWRITE_USER_ID,
      [
        Query.equal("accountId", user.$id),
        Query.select([
          "name",
          "email",
          "imageUrl",
          "status",
          "joinedAt",
          "accountId",
        ]),
      ]
    );

    return documents.length > 0 ? documents[0] : redirect("/login");
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
