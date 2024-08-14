import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { taskReducer, initialTasks } from "./taskReducer";
import { TasksContext, TasksDispatchContext } from "./TasksContext";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>use reducer + use context - task app</h1>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
