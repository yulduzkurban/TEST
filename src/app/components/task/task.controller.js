import { TaskView } from './task.view';
import { TaskModel } from './task.model';
import { eventBus } from '../../../utils/event-bus';

export class TaskController {

  view = new TaskView();
  model = new TaskModel();

  constructor(task) {
    this.model.setTaskInfo(task);
    this.view.render(this.model.getTaskInfo(), () => {
      eventBus.publish('open-modal', this.model.getTaskInfo());
    });
  }
}
