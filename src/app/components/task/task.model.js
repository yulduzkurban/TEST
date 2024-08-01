export class TaskModel {
  constructor() {}


  setTaskInfo({
    content,
    creationDate,
    dueDate,
    id,
    priority,
    status,
    title
  }) {
    this.content = content;
    this.creationDate = new Date(creationDate);
    this.dueDate = new Date(dueDate);
    this.id = id;
    this.priority = priority;
    this.status = status;
    this.title = title;
  }

  getTaskInfo() {
    return {
      content: this.content,
      creationDate: this.creationDate,
      dueDate: this.dueDate,
      id: this.id,
      priority: this.priority,
      status: this.status,
      title: this.title
    };
  }

  deleteTaskInfo() {
    this.content = undefined;
    this.creationDate = undefined;
    this.dueDate = undefined;
    this.id = undefined;
    this.priority = undefined;
    this.status = undefined;
    this.title = undefined;
  }
}
