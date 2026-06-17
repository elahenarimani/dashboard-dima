// import { useEffect, useState } from "react";
// import type { IToDoData } from "../types/todo";

// const useTodos = (id?: number) => {
//   const [data, setData] = useState<IToDoData[] | IToDoData | null>(
//     id ? null : []
//   );
//   const [isPending, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const url = `http://localhost:5000/toDoData${
//     id ? `/${id}` : ""
//   }`;

//   const getTodos = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(url);
//       const result = await res.json();
//       setData(result);
//     } catch (error) {
//       console.log({ error });
//       setError("Failed to fetch todos");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getTodos();
//   }, []);

//   return { data, isPending, error, reFetch: getTodos };
// };

// export default useTodos;

import { useEffect, useState } from "react";
import axios from "axios";
import type { IToDoData } from "../types/todo";

const useTodos = (id) => {
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

const deleteTodo = async (id) => {
  try {
    setIsMutating(true);

    await axios.delete(
      `http://localhost:5000/toDoData/${id}`
    );

    // getData();
  }catch (error) {
      console.log({ error });
      // setError(error)
    }  
  
  finally {
    setIsMutating(false);
  }
};

//   const deleteTodo = async (id: number) => {
//     try {
//       await axios.delete(`http://localhost:5000/toDoData/${id}`);

//       getData();
//     } catch (error) {
//       console.log(error);
//     }
//   };

  //add
//   const addTodo = async (todo: Omit<IToDoData, "id">) => {
//     try {
//       setLoading(true);

//       await axios.post("http://localhost:5000/toDoData", todo);

//       getData(); // refresh list
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
const addTodo = async (todo) => {
  try {
    setIsMutating(true);

    await axios.post(
      "http://localhost:5000/toDoData",
      todo
    );

    // getData();
  } catch (error) {
      console.log({ error });
      // setError(error)
    }
  finally {
    setIsMutating(false);
  }
};

  return { data, isPending, reFetch: getData, deleteTodo, addTodo };
};
export default useTodos;
