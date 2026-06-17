import { useState } from "react";
import { useParams } from "react-router-dom";

import useToDo from "../../../hooks/useToDo";

import Button from "../../../components/kit/Button";
import Card from "./_components/card";
import AddTaskModal from "./_components/addTaskModal";

const ToDo: React.FC = () => {
  const { id } = useParams();
  const { data: todoDataList, isPending  ,deleteTodo} = useToDo(id);
  const [activeModal, setActiveModal] = useState(false);

  if (isPending && todoDataList.length === 0) {
  return <p>Loading...</p>;
}
  if (todoDataList.length === 0) {
    return <p> Not Found</p>;
  }
  console.log("todoList:", todoDataList);
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
      <div className="w-full flex flex-col justify-start items-center pt-5 gap-3">
        {todoDataList.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            initialDone={item.done}
            id={item.id}
            onDelete={deleteTodo}
          />
        ))}
      </div>
      <AddTaskModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        onClose={() => setActiveModal(false)}
      />
    </div>
  );
};
export default ToDo;
