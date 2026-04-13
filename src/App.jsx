import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">📝 To-Do List</h1>

        <TaskInput />
        <Filter />
        <TaskList />
      </div>
    </div>
  );
}
