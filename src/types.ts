export type SimpleTrip = {
  country: string;
  numberOfDays: string;
  name: string;
  travelStyle: string;
  budget: string;
  price: string;
  image: FileList;
  location: string;
  intersets: string;
  groupType: string;
};
export type User = {
  name: string;
  email: string;
  image: string;
  status: string;
  $createdAt: string;
  $id: string;
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

export const MAX_PAGE = 6;
