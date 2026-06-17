import {  useState } from "react";

import Button from "../../../components/kit/Button";
import AddTaskModal from "./_components/addTaskModal";
import Test from "./_components/test";

const ToDo: React.FC = () => {
  // const { id } = useParams();
  // const { data: todoDataList, isPending  ,deleteTodo} = useToDo(id);
  //  const { data: todoDataList, isPending  } = useToDo(id);
  const [activeModal, setActiveModal] = useState(false);

//   if (isPending && todoDataList.length === 0) {
//   return <p>Loading...</p>;
// }
//   if (todoDataList.length === 0) {
//     return <p> Not Found</p>;
//   }

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
      <Test  />
      <AddTaskModal
        activeModal={activeModal}
        // setActiveModal={setActiveModal}
        onClose={() => setActiveModal(false)}
      />
    </div>
  );
};
export default ToDo;
