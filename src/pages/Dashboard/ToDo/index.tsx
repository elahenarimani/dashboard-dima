import { useState } from "react";

import Button from "@/components/kit/Button";
import AddTaskModal from "./_components/addTaskModal";
import Card from "./_components/card";
import useTodos from "@/hooks/useTodos";

const ToDo: React.FC = () => {
  // const { data: todoDataList, isPending  ,deleteTodo} = useTodos();
  const todos = useTodos();
  const [activeModal, setActiveModal] = useState(false);

  if (todos.isPending && todos.data.length === 0) {
    return <p>Loading...</p>;
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
      <div className="w-full flex flex-col justify-start items-center pt-5 gap-5">
        {todos.data.map((item) => (
          <Card
            // key={item.id}
            // title={item.title}
            // initialDone={item.done}
            // id={item.id}
            // onDelete={deleteTodo}
            key={item.id}
            title={item.title}
            initialDone={item.done}
            id={item.id}
            onDelete={todos.deleteTodo}
          />
        ))}
      </div>
      {/* <Test  /> */}
      <AddTaskModal
        // activeModal={activeModal}

        // onClose={() => setActiveModal(false)}
        activeModal={activeModal}
        onClose={() => setActiveModal(false)}
        addTodo={todos.addTodo}
        refresh={todos.getData}
      />
    </div>
  );
};
export default ToDo;
