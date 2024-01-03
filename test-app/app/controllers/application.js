import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import moment from 'moment';

export default class RedirectController extends Controller {
  @tracked someDate = moment();
  @tracked selected = null;
  @tracked selectedRange = null;
  @tracked selectedMultiple = null;

  @action
  onSelect(selected) {
    this.selected = selected.date;
  }

  @action
  onCenterChange(calendar) {
    this.someDate = calendar.date;
  }

  @action
  onSelectedRange(selected) {
    this.selectedRange = selected.moment;
  }

  @action
  onSelectedMultiple(selected) {
    this.selectedMultiple = selected.moment;
  }

  @action
  onCenterChangeMultiple(selected) {
    this.someDate = selected.moment;
  }
}
