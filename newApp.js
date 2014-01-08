if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to musician list bruh. Nice work. It updates on its own WTF";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Musicians = new Meteor.Collection("musicians");

if (Meteor.is_client) {
  Template.musician_list.Musicians = function () {
    return Musicians.find({}, {sort: {likes: -1, name: 1}});
  };
}