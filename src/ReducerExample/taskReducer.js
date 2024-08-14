const initialTasks = [
  { id: 0, text: "Learn C++", done: false },
  { id: 1, text: "Go to Gym", done: false },
  { id: 2, text: "Finish home work", done: false },
];

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export { initialTasks, taskReducer };