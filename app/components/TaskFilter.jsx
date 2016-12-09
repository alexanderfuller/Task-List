var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
require('../../public/css/style.css');

export var TaskFilter = React.createClass({
  render: function () {
    var {dispatch, showCompleted} = this.props;

    return (


          <div className="filter" onClick={() => {
              //use dispatch to call showCompleted action
                  dispatch(actions.toggleShowCompleted());
            }}>
              <a>Show Completed</a>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} />

          </div>

    )
  }
});

//return default state of this component
export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted
    }
  }
)(TaskFilter);
