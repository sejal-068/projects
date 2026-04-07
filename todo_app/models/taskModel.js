let tasks = [];

module.exports = {
    getTasks: () => tasks,

    addTask: (task) => tasks.push(task),

    deleteTask: (index) => tasks.splice(index, 1)
};