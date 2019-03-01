import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  indexPage: computed('currentRouteName', function() {
    return this.currentRouteName === 'index';
  })
});
