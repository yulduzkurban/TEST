import { TaskListView } from './task-list.view';
import { TaskListModel } from './task-list.model';
import { TaskController } from '../task/task.controller';
import { eventBus } from '../../../utils/event-bus';

export class TaskListController {

  view = new TaskListView();
  model = new TaskListModel();

  constructor() {
    eventBus.subscribe('show-table', () => {
      this.init();
    });
  }

  init() {
    this.view.render();

    this.model.getTasks().then(tasks => {
      tasks.forEach(task => {
        new TaskController(task);
      })
    });


    eventBus.subscribe('create-task', task => {new TaskController(task)});
  }
}
