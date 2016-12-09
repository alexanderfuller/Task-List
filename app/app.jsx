var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TaskApp = require('TaskApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TaskAPI = require('TaskAPI');

//listen to changes on redux store
store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  //set local storage tasks to current state
  TaskAPI.setTasks(state.tasks);
});

//allow tasks that may exist to be loaded in
var initialTasks = TaskAPI.getTasks();

//call action addTosks
store.dispatch(actions.addTasks(initialTasks));





ReactDOM.render(
  // provider will allow any component and its children to have access to redux store
//attach store property defined with our redux store to provider
  <Provider store={store}>
    <TaskApp/>
  </Provider>,
  document.getElementById('app')
);
