var $ = require('jquery');

module.exports = {
  setTasks: function (taskitems) {
    //store array is string in local storage
    if ($.isArray(taskitems)) {
      localStorage.setItem('taskitems', JSON.stringify(taskitems));
      return taskitems;
    }
  },
  getTasks: function () {
    var stringTasks = localStorage.getItem('taskitems');
    var taskitems = [];

    try {
      //unstring object from local storage
      taskitems = JSON.parse(stringTasks);
    } catch (e) {

    }
     //return array if its ok, if not return empty array
    return $.isArray(taskitems) ? taskitems : [];
  },
  filterTasks: function (taskitems, showCompleted) {
    var filteredTasks = taskitems;

    // Filter by showCompleted
    filteredTasks = filteredTasks.filter((task) => {
      return !task.completed || showCompleted;
    });



    // Sort tasks with non-completed first
    filteredTasks.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTasks;
  }
};
