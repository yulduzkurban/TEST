import './pagination.scss';
import { TaskListController } from '../task-list/task-list.controller';
import { DashboardController } from '../dashboard/dashboard.controller';
import { eventBus } from '../../../utils/event-bus';

export class PaginationView {
  selector = 'pagination';

  constructor() {
    // this.render();
  }

  render() {
    const pagination = document.querySelector(`#${this.selector} .container`);

    if (pagination) {
      return;
    }

    const nav = document.createElement('section');

    nav.innerHTML = `
      <div class="container">
        <ul class="tab__list">
         <li class="tab__item" data-layout="table">
          <button class="tab__item-btn" type="button">
           Table view
          </button>
         </li>
         <li class="tab__item" data-layout="board">
          <button class="tab__item-btn tab__item-btn--active" type="button">
           Board view
          </button>
         </li>
        </ul>
      </div>
    `;

    nav.addEventListener('click', (e) => {
      const activeView = document.querySelector('#pagination .tab__item-btn--active').parentElement.dataset.layout;

      let li = e.target;
      if (li.tagName === 'BUTTON') {
        li = li.parentElement;
      }

      const button = li.querySelector('button');

      if ((li.tagName !== 'LI') || (button.classList.contains('tab__item-btn--active'))) {
        return;
      }

      nav.querySelectorAll('li button').forEach(el => {
        el.classList.remove('tab__item-btn--active');
      });


      button.classList.add('tab__item-btn--active');

      const view = li.dataset.layout;

      if (activeView === view) {
        return;
      }

      if (view === 'board') {
        document.querySelector(".task-list").remove();
        eventBus.publish('show-dashboard');
      } else if (view === 'table') {
        document.querySelector(".todo").remove();
        eventBus.publish('show-table');
      }
    });
    document.getElementById(this.selector).appendChild(nav);
  }
}
