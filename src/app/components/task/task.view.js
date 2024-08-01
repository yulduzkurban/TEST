import './task.scss';
import { formatDate, getPriority, getStatus } from '../../../utils';

export class TaskView {
  selector = 'task';

  constructor() {}

  render({
    content,
    creationDate,
    dueDate,
    id,
    priority,
    status,
    title,
  },
  taskListHandler) {
    const task = document.createElement('tr');
    task.classList.add(this.selector, 'task-list--row');
    task.setAttribute('task-id', id);
    task.innerHTML = `
      <td class="task-column">
        <span>${title}</span>
        <i class="task-column--icon fa-solid fa-up-right-and-down-left-from-center"></i>
      </td>
      <td class="description-column">${content}</td>
      <td class="creation-date-column">${formatDate(creationDate)}</td>
      <td class="due-date-column">${formatDate(dueDate)}</td>
      <td class="priority-column"></td>
      <td class="status-column"></td>
    `;

    task.querySelector('.priority-column').appendChild(getPriority(priority));
    task.querySelector('.status-column').appendChild(getStatus(status));
    task.addEventListener('click', () => {
      taskListHandler();
    });

    document.querySelector('.task-list tbody').appendChild(task);
  }
}
