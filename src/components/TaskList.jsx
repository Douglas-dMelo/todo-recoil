import { useRecoilValue } from "recoil";
import { filteredTasksState } from "../selectors/filteredTasks";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useRecoilValue(filteredTasksState);

  if (tasks.length === 0) {
    return <div className="empty">Nenhuma tarefa 👀</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
