export type Trip = {
  tripDetail: string;
  imageUrls: string;
  ceratedAt: string;
  payment_link: string;
  userId: string;
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
