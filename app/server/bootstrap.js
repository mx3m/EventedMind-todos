Meteor.startup(function () {
  ServiceConfiguration.configurations.upsert(
    { service: 'meteor-developer' },
    {
      $set: {
        clientId: 'aasK5MHCvKiThqNDi',
        secret: '7dw9F7cHKDM8y7ZCsfvf76ZmCaAgd8EkFC',
        loginStyle: "popup"
      }
    }
  );
});
