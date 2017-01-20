app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      controller: "RootCtrl",
      templateUrl: "app/partials/rootpartial.html",
    })
    .when("/login", {
      controller: "LoginCtrl",
      templateUrl: "app/partials/loginpartial.html",
    })
    .when("/newnote", {
      controller: "NewNoteCtrl",
      templateUrl: "app/partials/newNotepartial.html",
    })
    .when("/notelist", {
      controller: "NoteListCtrl",
      templateUrl: "app/partials/notelistpartial.html",
    })
    .otherwise({
      redirectTo: "/"
    });
});