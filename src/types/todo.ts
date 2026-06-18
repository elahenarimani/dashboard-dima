export interface IToDoData {
  id: string;
  title: string;
  done: boolean;
  favorit:boolean
}
export type CreateTodo = Omit<IToDoData, "id">;
