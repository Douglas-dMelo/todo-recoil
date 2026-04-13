import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { taskState } from "../atoms/taskState";

export default function TaskInput() {
  const [text, setText] = useState("");
  const setTasks = useSetRecoilState(taskState);

  const addTask = () => {
    if (!text.trim()) return;

    setTasks((old) => [...old, { id: Date.now(), text, completed: false }]);

    setText("");
  };

  return (
    <div className="input-group">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar tarefa..."
      />
      <button onClick={addTask}>Adicionar</button>
    </div>
  );
}
