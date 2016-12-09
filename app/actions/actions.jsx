
//action generators for our reducers to handle
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTask = (text) => {
  return {
    type: 'ADD_TASK',
    text:text
  };
};

export var addTasks = (taskitems) => {
  return {
    type: 'ADD_TASKS',
    taskitems:taskitems
  };
};

export var toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    id:id
  };
};
