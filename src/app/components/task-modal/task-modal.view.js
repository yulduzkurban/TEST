import './task-modal.scss';
import { getSelectedOption } from '../../../utils';
import { eventBus } from '../../../utils/event-bus';

export class TaskModalView {
  selector = 'task-modal';

  constructor() {}

  render(task) {
    const modal = document.createElement('div');
    modal.classList.add(this.selector);
    modal.innerHTML = `
      <div class="task-modal--content">
        <form class="modal-form">
          <label class="label label--title">
            <input type="text" name="title" placeholder="Name the Task" required/>
          </label>
          <label class="label label--status">
            <span>Status</span>
            <select name="status" required>
              <option value="" selected disabled hidden>Empty</option>
              <option value="DONE" class="smth">Done</option>
              <option value="IN_PROGRESS " class="smth2">In Progress</option>
              <option value="REVIEW" class="smth3">Review</option>
              <option value="TODO" class="smth4">To Do</option> 
            </select>
          </label>
          <label class="label label--priority">
            <span>Priority</span>
            <select name="priority" required>
              <option value="" selected disabled hidden>Empty</option>
              <option value="LOW_PRIORITY" class="smth">Low</option>
              <option value="MEDIUM_PRIORITY" class="smth2">Medium</option>
              <option value="TOP_PRIORITY" class="smth5">High</option>
            </select>
          </label>
          <label class="label label--due-date">
            <span>Due Date</span>
            <input type="date" name="dueDate" placeholder="Empty" required/>
          </label>
          <label class="label label--creation-date">
            <span>Creation Date</span>
            <input type="date" name="creationDate" required disabled/>
          </label>
          <label class="label label--description">
            <span>Description</span>
            <textarea name="content" placeholder="Please describe the Task" required></textarea>
          </label>
          <div class="task-modal--buttons">
            ${ task ? `
            <button class="delete-button">
              <i class="fa-solid fa-trash"></i>
              Delete
            </button>
            `: '' }
            <button class="submit-button" type="submit">Save</button>
          </div>
        </form>
        <button class="close-modal-button">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;

    modal.querySelector('.close-modal-button').addEventListener('click', () => {this.close()});
    modal.querySelector('.modal-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitForm(modal, task?.id);
    });

    if(task) {
      this.fillModal(task, modal);
    }

    modal.querySelector('input[name="creationDate"]').valueAsDate = new Date();
    document.querySelector('body').appendChild(modal);
  }

  submitForm(modalEl, id) {
    const task = this.getTaskInfo(modalEl);

    eventBus.publish(id ? `update-task-${id}`: 'create-task', task);

    console.log('Task: ', task);
    this.close();
  }

  getTaskInfo(modalEl) {
    return {
      title: modalEl.querySelector('input[name="title"]').value,
      status: getSelectedOption(modalEl.querySelector('select[name="status"]')),
      priority: getSelectedOption(modalEl.querySelector('select[name="priority"]')),
      dueDate: modalEl.querySelector('input[name="dueDate"]').value,
      creationDate: new Date().getTime(),
      content: modalEl.querySelector('textarea[name="content"]').value,
    }
  }

  fillModal(task, modalEl) {
    modalEl.querySelector('input[name="title"]').value = task.title;
    modalEl.querySelector('select[name="status"]').value = task.status;
    modalEl.querySelector('select[name="priority"]').value = task.priority;
    modalEl.querySelector('input[name="dueDate"]').valueAsDate = new Date(task.dueDate)
    modalEl.querySelector('input[name="creationDate"]').valueAsDate = new Date(task.creationDate);
    modalEl.querySelector('textarea').value = task.content;
  }

  close() {
    const modalEl = document.querySelector(`.${this.selector}`);
    modalEl.remove();
  }
}
