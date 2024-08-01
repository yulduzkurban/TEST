import { DashboardView } from './dashboard.view';
import { DashboardModel } from './dashboard.model';
import { eventBus } from '../../../utils/event-bus';

export class DashboardController {

  view = new DashboardView();
  model = new DashboardModel();

  constructor() {
    eventBus.subscribe('show-dashboard', () => {
      this.view.render();
    });
  }
}





