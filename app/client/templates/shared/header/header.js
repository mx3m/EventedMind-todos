Template.header.helpers({
// helpers here
});

Template.header.events({
  'click [data-logout]': function() {
    Meteor.logout();
  },
  'click [data-login]': function() {
    Meteor.loginWithMeteorDeveloperAccount();
  }
});
