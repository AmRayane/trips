export type Trip = {
  country: string;
  numberOfDays: string;
  name: string;
  travelStyle: string;
  interests: string;
  budget: string;
  price: string;
  image: string | FileList;
  location: string;
  groupeType: string;
  description?: string;
  imageUrl: string;
  $id: string;

  itinerary?: string;
  bestTimeToVisit?: string;
};
export type User = {
  name: string;
  email: string;
  status: string;
  image?: string;
  $createdAt: string;
  accountId: string;
};

export type UserInfo = {
  email: string;
  password: string;
};

export type Inputs = {
  name: string;
  email: string;
  image: FileList;
  status: string;
};

export type PaginatedUsersResponse = {
  users: User[];
  total: number;
};

export type PaginatedTripsResponse = {
  trips: Trip[];
  total: number;
};

export const gradientColors = [
  {
    background: "#ADD8E6",
    text: "#006994",
  },
  {
    background: "#90EE90",
    text: "#006400",
  },
  {
    background: "#FFCC99",
    text: "#994C00",
  },
  {
    background: "#FFB6C1",
    text: "#8B0032",
  },
  {
    background: "#BAFFC9",
    text: "#006655",
  },
  {
    background: "#DDFFF7",
    text: "#005666",
  },
  {
    background: "#FFF5CC",
    text: "#665500",
  },
  {
    background: "#CCE5FF",
    text: "#003366",
  },
  {
    background: "#E6FFE6",
  },
  {
    background: "#FFE6F2",
    text: "#660033",
  },
  {
    background: "#E0FFFF",
    text: "#00404D",
  },
  {
    background: "#F0F8FF",
    text: "#191970",
  },
];
export const MAX_PAGE = 6;
export const MAX_TRIPS_PAGE = 8;
