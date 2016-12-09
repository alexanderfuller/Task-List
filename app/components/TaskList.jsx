var React = require('react');
//connect is used to specify what data we need from the store
var {connect} = require('react-redux');
import TaskItem from 'TaskItem';
var TaskAPI = require('TaskAPI');
require('../../public/css/style.css');

export var TaskList = React.createClass({
  render: function () {
    var {tasks, showCompleted} = this.props;
    var renderTasks = () => {
               //return  filtered list items
      return TaskAPI.filterTasks(tasks, showCompleted).map((taskItem) => {
        return (
          <TaskItem key={taskItem.id} {...taskItem}/>
        );
      });
    };

    return (
      <div className="list">
        {renderTasks()}
      </div>
    )
  }
});

//lets us return state from store for our TaskList component
export default connect(
  (state) => {
    return state;
  }
)(TaskList);
