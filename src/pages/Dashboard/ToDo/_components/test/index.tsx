import { useParams } from "react-router-dom";
import useToDo from "../../../../../hooks/useToDo";
import Card from "../card";

const Test = () => {
  const { id } = useParams();
  const { data: todoDataList, isPending, deleteTodo } = useToDo(id);
  if (isPending && todoDataList.length === 0) {
    return <p>Loading...</p>;
  }
  if (todoDataList.length === 0) {
    return <p> Not Found</p>;
  }

  return (
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
  );
};
export default Test;
