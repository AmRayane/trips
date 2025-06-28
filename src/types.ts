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
  joinedAt: string;
  accountId: string;
};

export const MAX_PAGE = 7;
