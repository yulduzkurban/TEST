import { PaginationView } from './pagination.view';
import { PaginationModel } from './pagination.model';
import { eventBus } from '../../../utils/event-bus';

export class PaginationController {
  view = new PaginationView();
  model = new PaginationModel();

  constructor() {
    eventBus.subscribe('show-pagination', () => {
      this.view.render();
    });
  }
}
