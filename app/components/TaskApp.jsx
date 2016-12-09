var React = require('react');
var uuid = require('node-uuid');
require('../../public/css/style.css');
//import child components
import TaskList from 'TaskList'
import AddTask from 'AddTask';
import TaskFilter from 'TaskFilter';

var TaskApp = React.createClass({
  //render main component with its child components
  render: function () {
    return (

            <div className="container">
                    <h1 className="title">Task List</h1>
              <TaskFilter/>
              <TaskList/>
              <AddTask/>
            <button className="clear" type="submit" onClick={() => {
            window.location.reload();
            window.localStorage.clear();
            }}>Clear List</button>
            </div>

    )
  }
});

module.exports = TaskApp;
