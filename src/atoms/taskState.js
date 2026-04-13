import { atom } from "recoil";

export const taskState = atom({
  key: "taskState",
  default: [],
});

export const filterState = atom({
  key: "filterState",
  default: "all",
});
