/*****************************************************************************/
/* TodosCount: Event Handlers */
/*****************************************************************************/
Template.TodosCount.events({
});

/*****************************************************************************/
/* TodosCount: Helpers */
/*****************************************************************************/
Template.TodosCount.helpers({
  'totalCount': function() {
    return Todos.find().count();
  },
  'totalDoneCount': function() {
    return Todos.find({userId: Meteor.userId(), isDone: true}).count();
  }
});

/*****************************************************************************/
/* TodosCount: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosCount.created = function () {
};

Template.TodosCount.rendered = function () {
};

Template.TodosCount.destroyed = function () {
};
