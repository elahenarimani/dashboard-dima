import { useEffect, useState } from "react";
import axios from "axios";
import type { CreateTodo, IToDoData } from "../types/todo";

const useTodos = (id?:number) => {
  const [data, setData] = useState<IToDoData[]>([]);
  const [isPending, setLoading] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const API_URL = `http://localhost:5000/toDoData${id ? `/${id}` : ""}`;

  //get
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get<IToDoData[]>(API_URL);
      console.log("render data");
      setData(res.data);
    } catch (error) {
      console.log({ error });
      // setError(error)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //delete

const deleteTodo = async (id:number | string) => {
  try {
    setIsMutating(true);

    await axios.delete(
      `http://localhost:5000/toDoData/${id}`
    );

    getData();
  }catch (error) {
      console.log({ error });
      // setError(error)
    }  
  
  finally {
    setIsMutating(false);
  }
};

//add

const addTodo = async (todo: CreateTodo) => {
  try {
    setIsMutating(true);

    const res = await axios.post(
      "http://localhost:5000/toDoData",
      todo
    );

    return res.data;
  } finally {
    setIsMutating(false);
  }
};

  return { data , isPending , isMutating , getData , deleteTodo , addTodo , setData };
};
export default useTodos;