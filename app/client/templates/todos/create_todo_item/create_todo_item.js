/*****************************************************************************/
/* CreateTodoItem: Event Handlers */
/*****************************************************************************/
Template.CreateTodoItem.events({
  'submit form': function(e, tmpl) {

    Todos.insert({
      subject: tmpl.find('input').value,
      createdAt: new Date(),
      isDone: false,
      userId: Meteor.userId()
    });

    tmpl.find('form').reset();
  }
});

/*****************************************************************************/
/* CreateTodoItem: Helpers */
/*****************************************************************************/
Template.CreateTodoItem.helpers({
});

/*****************************************************************************/
/* CreateTodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTodoItem.created = function () {
};

Template.CreateTodoItem.rendered = function () {
};

Template.CreateTodoItem.destroyed = function () {
};
