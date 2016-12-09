//used to generate id value for items in list
var uuid = require('node-uuid');



//reducer for toggling completed/non-completed tasks
export var showCompletedReducer = (state = false, action) => {
  switch (action.type) { //set states based on action 'TOGGLE_SHOW_COMPLETED' defined in actions/actions.js
    case 'TOGGLE_SHOW_COMPLETED':
    //return opposite of the checked state of list item
      return !state;
  //return default state of false(unchecked) for list item
    default:
      return state;
  }
};

//reducer for adding tasks
export var tasksReducer = (state = [], action) => {
  switch (action.type) { //set states based on action 'TOGGLE_SHOW_COMPLETED' defined in actions/actions.js
    case 'ADD_TASK':
    //use the es6 spread operator to return all list items in the return statement
      return [
        ...state,
        //properties defined to add new item
        {
          id: uuid(),
          //text property defined on the 'ADD_TASK' action
          text: action.text,
          completed: false
        }
      ];

    //reducer for toggling tasks completed/non-completed
    case 'TOGGLE_TASK':
    //map function will get all of our items in array
      return state.map((task) => {
    //check id of item and set it to opposite of its checked value
        if (task.id === action.id) {
          var nextCompleted = !task.completed;
      //update item completed status
          return {
            ...task,
            completed: nextCompleted
          };
        } else {
          return task;
        }
      });
//reducer for generating initial tasks
    case 'ADD_TASKS':
      return [
        ...state,
        ...action.taskitems
      ];
    default:
      return state;
  }
};
