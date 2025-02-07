import { Controller } from 'stimulus';
import StimulusReflex from 'stimulus_reflex';

export default class extends Controller {
  connect() {
    StimulusReflex.register(this);
  }

  toggleAll() {
    this.stimulate('TodosReflex#toggle_all');
  }

  destroyCompleted() {
    this.stimulate('TodosReflex#destroy_completed');
  }
}
