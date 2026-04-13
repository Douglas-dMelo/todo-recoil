import { useRecoilState } from "recoil";
import { filterState } from "../atoms/taskState";

export default function Filter() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div className="filter">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}>
        Todas
      </button>

      <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => setFilter("pending")}>
        Pendentes
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}>
        Concluídas
      </button>
    </div>
  );
}
