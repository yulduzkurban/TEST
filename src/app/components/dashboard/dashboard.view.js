import "./dashboard.scss";

import Plus from "../../../assets/imgs/plus.svg";
import { TaskModalController } from "../task-modal/task-modal.controller";
import { eventBus } from "../../../utils/event-bus";
import { TaskListModel } from "../task-list/task-list.model";


export class DashboardView {
    selector = "#content";

    constructor() {}

    render() {
        const dashboardEl = document.createElement("section");
        dashboardEl.classList.add("todo");

        dashboardEl.innerHTML = `
      <div class="container">
        <ul class="todo__list">
         <li class="todo__item">
            <div class="todo__top">
              <h2 class="todo__top-heading">
               To Do
              </h2>
              <button type="button" class="todo__top-btn">
               <img
                width="12" 
                height="12"
                src=${Plus} 
                alt="plus icon"
                class="todo__top-icon"
                />
              </button>
            </div>
            <ul class="todo__cards">
             <li class="todo__card">
              <h3 class="todo__card-title">
               Requirement Analysis
              </h3>
              <p class="todo__card-text">
               Thoroughly analyze the user stories to 
               understand the requirements, goals, and tasks 
               users need to perform.
              </p>
              <footer class="todo__footer">
               <span class="todo__footer-span">
                Low priority
               </span>
               <p class="todo__footer-date">
                Due in May 21, 2024
               </p>
              </footer>
             </li>
             <li class="todo__card">
              <h3 class="todo__card-title">
               Visual Design
              </h3>
              <p class="todo__card-text">
               Establish a design system that includes 
               color palettes, typography, iconography, 
               and other visual elements.
              </p>
              <footer class="todo__footer">
               <span class="todo__footer-span todo__footer-span--medium">
                Medium Priority
               </span>
               <p class="todo__footer-date">
                Due in May 21, 2024
               </p>
              </footer>
             </li>
            </ul>
            <button type="button" class="todo-add">
            <img
             width="10"
             src=${Plus} 
             height="10" 
             alt="plus icon" 
             class="todo-add-icon"
            />
            <p class="todo-add-text">
             Add a card
            </p>
          </button>
         </li>
         <li class="todo__item">
            <div class="todo__top">
              <h2 class="todo__top-heading">
               In Progress
              </h2>
              <button type="button" class="todo__top-btn">
               <img
                width="12" 
                height="12"
                src=${Plus} 
                alt="plus icon"
                class="todo__top-icon"
                />
              </button>
            </div>
            <ul class="todo__cards">
             <li class="todo__card">
              <h3 class="todo__card-title">
               Wireframing
              </h3>
              <p class="todo__card-text">
               Create low-fidelity sketches to brainstorm and 
               iterate on different layout ideas quickly.
              </p>
              <footer class="todo__footer">
               <span class="todo__footer-span">
                Low priority
               </span>
               <p class="todo__footer-date">
                Due in May 21, 2024
               </p>
              </footer>
             </li>
             <li class="todo__card">
              <h3 class="todo__card-title">
               Development Handoff
              </h3>
              <p class="todo__card-text">
               Prepare detailed design specifications 
               and guidelines for developers.
              </p>
              <footer class="todo__footer">
               <span class="todo__footer-span todo__footer-span--medium">
                Medium Priority
               </span>
               <p class="todo__footer-date">
                Due in May 21, 2024
               </p>
              </footer>
             </li>
            </ul>
            <button type="button" class="todo-add">
            <img
             width="10"
             src=${Plus} 
             height="10" 
             alt="plus icon" 
             class="todo-add-icon"
            />
            <p class="todo-add-text">
             Add a card
            </p>
          </button>
         </li>
          <li class="todo__item">
            <div class="todo__top">
              <h2 class="todo__top-heading">
               Review
              </h2>
              <button type="button" class="todo__top-btn">
               <img
                width="12" 
                height="12"
                src=${Plus} 
                alt="plus icon"
                class="todo__top-icon"
                />
              </button>
            </div>
            <ul class="todo__cards">
             <li class="todo__card">
              <h3 class="todo__card-title">
               Research
              </h3>
              <p class="todo__card-text">
               Conduct research to understand the target audience, 
               including their preferences, pain points, and 
               behaviors.
              </p>
              <footer class="todo__footer">
               <span class="todo__footer-span todo__footer-span--red">
                Top Priority
               </span>
               <p class="todo__footer-date">
                Due in May 21, 2024
               </p>
              </footer>
             </li>
            </ul>
            <button type="button" class="todo-add">
            <img
             width="10"
             src=${Plus} 
             height="10" 
             alt="plus icon" 
             class="todo-add-icon"
            />
            <p class="todo-add-text">
             Add a card
            </p>
          </button>
         </li>
         <li class="todo__item">
            <div class="todo__top">
              <h2 class="todo__top-heading">
               Done
              </h2>
              <button type="button" class="todo__top-btn">
               <img
                width="12" 
                height="12"
                src=${Plus} 
                alt="plus icon"
                class="todo__top-icon"
                />
              </button>
            </div>
            <button type="button" class="todo-add">
            <img
             width="10"
             src=${Plus} 
             height="10" 
             alt="plus icon" 
             class="todo-add-icon"
            />
            <p class="todo-add-text">
             Add a card
            </p>
          </button>
         </li>
        </ul>
      </div>`;

        const appEl = document.querySelector(this.selector);

        if (appEl) {
            appEl.innerHTML = dashboardEl.outerHTML;
            this.bindEvents();
        } else {
            console.error(`Selector '${this.selector}' not found in the DOM.`);
        }


        eventBus.publish('show-header')
        eventBus.publish('show-pagination')

    }

    bindEvents() {
        const addButtons = document.querySelectorAll(".todo-add");
        if (addButtons) {
            addButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    eventBus.publish("open-modal");
                });
            });
        } else {
            console.error("No add buttons found in the DOM.");
        }
    }

    showModal() {
        const modal = new TaskModalController();
        modal.show();
    }
}
