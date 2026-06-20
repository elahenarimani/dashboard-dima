import { useState } from "react";

import Button from "@/components/kit/Button";
import AddTaskModal from "./_components/addTaskModal";
import Card from "./_components/card";

import useTodos from "@/hooks/useTodos";

const ToDo: React.FC = () => {
  const todos = useTodos();
  const [activeModal, setActiveModal] = useState(false);
  if (todos.isPending && todos.data.length === 0) {
    return (
      <div className="flex w-full justify-center items-center">
        <p className="text-center pt-50 font-extrabold font-3xl">Loading...</p>
      </div>
    );
  }
  return (
    <div className="h-full  flex flex-col justify-start items-start px-5">
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-(--color-text) font-bold text-3xl ">To-Do List</p>
        <Button
          variant="contained"
          className="w-[150px]"
          onClick={() => setActiveModal(true)}
        >
          Add New Task
        </Button>
      </div>
      {todos.data.length === 0 ? (
        <div className="flex w-full justify-center items-center">
          <p className="text-center pt-50 font-extrabold font-3xl">
            Not Found Any Todos
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-start items-center pt-5 gap-5">
          {todos.data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              initialDone={item.done}
              id={item.id}
              onDelete={todos.deleteTodo}
            />
          ))}
        </div>
      )}
      <AddTaskModal
        activeModal={activeModal}
        onClose={() => setActiveModal(false)}
        addTodo={todos.addTodo}
      />
    </div>
  );
};
export default ToDo;
