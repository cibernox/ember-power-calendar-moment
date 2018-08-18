import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.someDate = moment();
  }
});
