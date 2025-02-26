import { useContext, useState } from "react";
import { TasksDispatchContext } from "./TasksContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: Math.random(),
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
