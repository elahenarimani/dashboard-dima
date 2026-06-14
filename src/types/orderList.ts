export type OrderType =
  | "Health & Medicine"
  | "Book & Stationary"
  | "Services & Industry"
  | "Fashion & Beauty"
  | "Home & Living"
  | "Electronics"
  | "Mobile & Phone"
  | "Accessories";

export type OrderStatus =
  | "Completed"
  | "Processing"
  | "Rejected"
  | "On Hold"
  | "In Transit";

export type Order = {
  id: number;
  name: string;
  address: string;
  date: string;
  type: OrderType[];
  status: OrderStatus[];
};
export const ORDER_STATUSES = [
  "Completed",
  "Processing",
  "Rejected",
  "On Hold",
  "In Transit",
] as const;
export type ActiveModal = "date" | "type" | "status" | null;
export interface IFormState {
  date: null;
  type: [];
  status: [];
  order: null;
}
