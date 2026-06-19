import { useState } from "react";

import Button from "@/components/kit/Button";
import Input from "@/components/kit/Input";
import type { CreateTodo} from "@/types/todo";

type AddTaskModalTypes = {
  // activeModal: boolean;
  // onClose: () => void;
    activeModal: boolean;
  onClose: () => void;
  addTodo: (todo: CreateTodo) => Promise<CreateTodo>;
  refresh: () => Promise<void>;
};
const AddTaskModal: React.FC<AddTaskModalTypes> = ({
  activeModal,
  onClose,
  addTodo,
  refresh
  
}) => {
  // const { addTodo, setData, getData } = useTodos();

  const [task, setTask] = useState("");
  const handleAddTask = async () => {
    if (!task.trim()) return;
    // const newTodo = await addTodo({
    //   title: task,
    //   done: false,
    //   favorit: false,
    // });
    // setData((prev) => [newTodo, ...prev]);
    // getData();
    await addTodo({
      title: task,
      done: false,
      favorit: false,
    });
    await refresh(); 
    onClose();
    setTask("");
  };
  if (!activeModal) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 z-50 min-w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl border border-(--color-border)">
        <div className="flex items-center justify-between p-4">
          <h3 className="font-bold">Add Task</h3>

          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <div className="py-4">
          <div className="flex flex-col gap-2">
            <div className="w-full flex justify-center px-4">
              <Input
                type="text"
                ariaLabel="Task Name"
                value={task}
                onChange={(value) => setTask(value as string)}
                placeholder="Enter task name..."
              />
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <Button
              className="w-[150px] mt-10"
              variant="contained"
              onClick={handleAddTask}
            >
              Add Task Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
