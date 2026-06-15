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
  date: Date;
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
  date: Date | null;
  type: OrderType[];
  status: OrderStatus[];
  order: Order | null;
}
