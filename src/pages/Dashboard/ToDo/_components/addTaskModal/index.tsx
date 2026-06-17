import { useState, type Dispatch, type SetStateAction } from "react";
import { useParams } from "react-router-dom";

import useToDo from "../../../../../hooks/useToDo";

import Button from "../../../../../components/kit/Button";
import Input from "../../../../../components/kit/Input";

type AddTaskModalTypes = {
  activeModal: boolean;
  setActiveModal: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
};
const AddTaskModal: React.FC<AddTaskModalTypes> = ({
  activeModal,
  setActiveModal,
  onClose,
}) => {
  const { id } = useParams();
  const { addTodo } = useToDo(id);

  const [task, setTask] = useState("");
  const handleAddTask = async () => {
    if (!task.trim()) return;

    await addTodo({
      title: task,
      done: false,
    });

    setTask("");
    setActiveModal(false);
  };
  if (!activeModal) return null;
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 z-50 min-w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl border border-(--color-border)">
        <div className="flex items-center justify-between p-4">
          <h3 className="font-bold">Add Task</h3>

          <button
            onClick={() => setActiveModal(false)}
            className="text-gray-500 hover:text-black"
          >
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
                onChange={setTask}
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
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
