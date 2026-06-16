import { useState } from "react";
import Button from "../../../components/kit/Button";
import { todoData } from "../../../constants/todo";
import Card from "./_components/card";
// import AddTaskModal from "./_components/addTaskModal"

const ToDo: React.FC = () => {
  const [activeModal, setActiveModal] = useState(false)
  return (
    <div className="h-full  flex flex-col justify-start items-start px-5">
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-(--color-text) font-bold text-3xl ">To-Do List</p>
        <Button variant="contained" className="w-[150px]">
          Add New Task
        </Button>
      </div>
      <div className="w-full flex flex-col justify-start items-center pt-5 gap-3">
        {todoData.map((item) => (
          <Card key={item.id} title={item.title} initialDone={item.done} />
        ))}
      </div>
        {/* <AddTaskModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        
      /> */}
    </div>
  );
};
export default ToDo;
