import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import taskReducer from "./taskReducer";

const initialTasks = [
  { id: 0, text: "Learn C++", done: false },
  { id: 1, text: "Go to Gym", done: false },
  { id: 2, text: "Finish home work", done: false },
];

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: Math.random(),
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>use reducer - task app</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

