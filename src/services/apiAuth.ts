import { ID, OAuthProvider, Query } from "appwrite";
import { account, databases } from "./appwrite";
import type { User } from "../types";
import { redirect } from "react-router";
import toast from "react-hot-toast";

//inscrire le visiteur avec sont compte google
export async function loginWithGoogle(): Promise<void> {
  account.createOAuth2Session(
    OAuthProvider.Google,
    "http://localhost:5173/auth-callback",
  );
}

export async function storeUserDataFromGoogle(userStatus: string) {
  try {
    const user = await account.get();
    if (!user) {
      toast.error("User not found");
      window.location.href = "/";
      return;
    }

    const { providerAccessToken } = await account.getSession("current");
    const profilePicture = providerAccessToken
      ? await getGooglePicture(providerAccessToken)
      : null;

    const createdUser = await databases.createDocument(
      import.meta.env.VITE_APP_DATABASE_ID,
      import.meta.env.VITE_APP_APPWRITE_USER_ID,
      ID.unique(),
      {
        name: user.name,
        email: user.email,
        image: profilePicture,
        joinedAt: new Date().toISOString(),
        accountId: user.$id,
        status: userStatus,
      },
    );

    if (!createdUser?.$id) window.location.href = "/";
  } catch (error) {
    console.error("Erreur dans storeUserDataFromGoogle:", error);
    toast.error("Failed to save Google user");
    window.location.href = "/";
  }
}

const getGooglePicture = async (accessToken: string) => {
  try {
    const response = await fetch(
      "https://people.googleapis.com/v1/people/me?personFields=photos",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    if (!response.ok) throw new Error("Failed to fetch Google profile picture");

    const { photos } = await response.json();
    return photos?.[0]?.url || null;
  } catch (error) {
    console.error("Error fetching Google picture:", error);
    return null;
  }
};

export async function storeUserDataFromForm(userData: User) {
  const user = await account.get();
  const createdUser = await databases.createDocument(
    import.meta.env.VITE_APP_DATABASE_ID,
    import.meta.env.VITE_APP_APPWRITE_USER_ID,
    ID.unique(),
    {
      name: userData.name,
      email: userData.email,
      status: "user",
      joinedAt: new Date().toISOString(),
      accountId: user.$id,
    },
  );
  if (!createdUser) redirect("/");
  redirect("/user");
}

export async function getUser() {
  try {
    const user = await account.get();
    if (!user) return null;

    const { documents } = await databases.listDocuments(
      import.meta.env.VITE_APP_DATABASE_ID,
      import.meta.env.VITE_APP_APPWRITE_USER_ID,
      [
        Query.equal("accountId", user.$id),
        Query.select(["name", "email", "image", "status", "joinedAt"]),
      ],
    );

    return documents.length > 0 ? documents[0] : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

//login function
export async function login(email: string, password: string): Promise<void> {
  await account.createEmailPasswordSession(email, password);
  const user = await account.get();
  if (!user) throw new Error("User not found");
}

//sign up with data form
export async function signUp(password: string, userData: User) {
  try {
    await account.createEmailPasswordSession(userData.email, password);
    const user = await account.get();
    if (user) {
      const exitingUser = await getExistingUser(user.$id);
      if (exitingUser?.status === "admin") return redirect("/admin/dashboard");
      return redirect("/client");
    }
  } catch (error: any) {
    if (error.code === 401) {
      await account.create(ID.unique(), userData.email, password);
      await account.createEmailPasswordSession(userData.email, password);
      await storeUserDataFromForm(userData);
    }
  }
}

export async function logoutUser() {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error("Error during logout:", error);
  }
}

export async function getExistingUser(id: string): Promise<User | undefined> {
  const { documents, total } = await databases.listDocuments(
    import.meta.env.VITE_APP_DATABASE_ID,
    import.meta.env.VITE_APP_APPWRITE_USER_ID,
    [Query.equal("accountId", id)],
  );
  if (total > 0) return documents[0] as unknown as User;
}
