import { HeaderView } from './header.view';
import { HeaderModel } from './header.model';
import { eventBus } from '../../../utils/event-bus';

export class HeaderController {

  view = new HeaderView();
  model = new HeaderModel();

  constructor() {
    eventBus.subscribe('show-header', () => {
      this.view.render();
    });
  }
}
