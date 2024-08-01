import { AppView } from './app.view';
import { AppModel } from './app.model';

import {LoginController} from '../login/login.controller'
import { HeaderController } from '../header/header.controller';
import { PaginationController } from '../pagination/pagination.controller';
import { TaskListController } from '../task-list/task-list.controller';
import { TaskModalController } from '../task-modal/task-modal.controller';
import { DashboardController } from '../dashboard/dashboard.controller';







export class AppController {
  view = new AppView();
  model = new AppModel();


  login = new LoginController();
  header = new HeaderController();
  pagination = new PaginationController();
  dashboard = new DashboardController();
  taskList = new TaskListController();
  taskModal = new TaskModalController();

  constructor() {
    this.login.view.render();
  }
}
