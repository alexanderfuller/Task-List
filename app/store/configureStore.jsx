//load redux
var redux = require('redux');
//load reducers
var {showCompletedReducer, tasksReducer} = require('reducers');

export var configure = (initialState = {}) => {
  //allow us to combine reducers
  var reducer = redux.combineReducers({
    showCompleted: showCompletedReducer,
    tasks: tasksReducer
  });

//create store to hold our reducers and allows option for redux developer tools
  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
