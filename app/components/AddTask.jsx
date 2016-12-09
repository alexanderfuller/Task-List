var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
require('../../public/css/style.css');

export var AddTask = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    //allow us to dispatch action from store
    var {dispatch} = this.props;
    var taskText = this.refs.taskText.value;

    if (taskText.length > 0) {
      this.refs.taskText.value = '';
      //call action addTask
      dispatch(actions.addTask(taskText));
    } else {
      this.refs.taskText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="addItem" ref="taskText" placeholder="What do you need to do?"/>
          <button className="button">Add Task</button>
        </form>
      </div>
    );
  }
});
//connect AddTask component to provider
export default connect()(AddTask);
