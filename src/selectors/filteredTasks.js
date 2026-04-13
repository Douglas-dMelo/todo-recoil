import { selector } from "recoil";
import { taskState, filterState } from "../atoms/taskState";

export const filteredTasksState = selector({
  key: "filteredTasksState",
  get: ({ get }) => {
    const tasks = get(taskState);
    const filter = get(filterState);

    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    if (filter === "pending") {
      return tasks.filter((task) => !task.completed);
    }

    return tasks;
  },
});
