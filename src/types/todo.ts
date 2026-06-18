export interface IToDoData {
  id: number|string;
  title: string;
  done: boolean;
  favorit:boolean
}
export type CreateTodo = Omit<IToDoData, "id">;
