import { useEffect, useState } from "react";
import Button from "../../../components/kit/Button";
// import { todoData } from "../../../constants/todo";
import Card from "./_components/card";
import AddTaskModal from "./_components/addTaskModal";
import { getTodoData } from "../../../services/todo";
import type { IToDoData } from "../../../types/todo";


const ToDo: React.FC = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [todoDataList, settodoDataList] = useState<IToDoData[]>([]);
  useEffect(() => {
    const fetchChart = async () => {
      setLoading(true);
      try {
        const data = await getTodoData();
        settodoDataList(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchChart();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (todoDataList.length === 0) {
    return <p> Not Found</p>;
  }
console.log("todoList:" , todoDataList)
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
          <Card key={item.id} title={item.title} initialDone={item.done} />
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
