class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentId = 0;
    }

    addTask(taskName) {
        const task = {
            id: this.currentId++,
            name: taskName,
            completed: false
        };
        this.tasks.push(task);
        return task;
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    getTasks() {
        return this.tasks;
    }

    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
        }
    }
}

export default TaskManager;