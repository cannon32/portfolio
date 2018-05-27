import Ember from 'ember';

export default Ember.Controller.extend({
  indexPage: Ember.computed('currentRouteName', function() {
    return this.currentRouteName === 'index';
  })
});
