import { tasksContainer } from './taskElements.js';

class Tasks {
  constructor() {
    this.tasks = [];
  }

  init = () => {
    tasksContainer.innerHTML = '';
  };

  add = (task) => {
    this.tasks.push(task);
  };

  update = (desc, id) => {
    this.tasks[id].description = desc;
  };

  display = () => {
    this.tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.id = index;
      taskItem.innerHTML = `
      <input type="checkbox" id="task-${task.index}" name="task-${task.index}" ${task.completed ? 'checked' : 'unchecked'}>
      <p contenteditable="true" class="description">${task.description}</p>
      <i class="fa fa-ellipsis-v"><br>
      `;
      tasksContainer.appendChild(taskItem);
    });
  };

  deleteAllCompleted = () => {
    this.tasks = this.tasks.filter((task) => task.completed === false);
    tasksContainer.innerHTML = '';
  };

  updateIndex = () => {
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  delete = (index) => {
    this.tasks = this.tasks.filter((task) => task.index !== Number(index) + 1);
  };
}

const currentTasks = new Tasks();
export default currentTasks;
