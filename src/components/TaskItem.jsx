import { useRecoilState } from "recoil";
import { taskState } from "../atoms/taskState";

export default function TaskItem({ task }) {
  const [tasks, setTasks] = useRecoilState(taskState);

  const toggleTask = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const removeTask = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="task">
      <span className={task.completed ? "completed" : ""}>{task.text}</span>

      <div className="actions">
        <button className="complete" onClick={toggleTask}>
          ✔
        </button>
        <button className="delete" onClick={removeTask}>
          ✖
        </button>
      </div>
    </div>
  );
}
