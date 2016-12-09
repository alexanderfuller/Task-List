var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
require('../../public/css/style.css');

export var TaskItem = React.createClass({
  render: function () {
    //define properties, dispatch will allow us to call actions
    var {id, text, completed, dispatch} = this.props;
    var taskClassName = completed ? 'taskItem taskItem-completed' : 'taskItem';


    return (
      <div className="item"  onClick={() => {
          //use dispatch to call toggleTask action
          dispatch(actions.toggleTask(id));
        }}>
          <input type="checkbox" checked={completed}/>
          <a>{text}</a>
        </div>
    )
  }
});

//conect Task component to store
export default connect()(TaskItem);
