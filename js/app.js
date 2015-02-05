var am = angular.module('main_app', [
    'ui.bootstrap',
    'main_app.services',
    'main_app.controllers',
    'ngRoute',
    'ngGrid'
]);

am.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/landing", {templateUrl: "src/landing/landing.html", controller: "landing_controller"});
  $routeProvider.when("/landing_authed", {templateUrl: "src/landing/landing_authed.html", controller: "landing_controller"});

  $routeProvider.when("/login", {templateUrl: "src/login/login.html", controller: "login_controller"});
  // $routeProvider.when("/register", {templateUrl: "src/register/register.html", controller: "register_controller"});
  // $routeProvider.when("/register_confirmation", {templateUrl: "src/register/confirmation.html"});

  $routeProvider.when("/profile_edit/:id", {templateUrl: "src/profile_edit/profile_edit.html", controller: "edit_profile_controller"});

  $routeProvider.when("/persons", {templateUrl: "src/persons/persons.html", controller: "persons_controller"});
  $routeProvider.when("/person/:id", {templateUrl: "src/persons/person.html", controller: "person_controller"});
  $routeProvider.when("/person_edit/:id", {templateUrl: "src/persons/person_edit.html", controller: "edit_person_controller"});

  $routeProvider.when("/files", {templateUrl: "src/files/files.html", controller: "files_controller"});

  $routeProvider.when("/events", {templateUrl: "src/events/events.html", controller: "events_controller"});
  $routeProvider.when("/event/:id", {templateUrl: "src/events/event.html", controller: "event_controller"});
  $routeProvider.when("/event_edit/:id", {templateUrl: "src/events/event_edit.html", controller: "event_edit_controller"});
  $routeProvider.when("/event_add", {templateUrl: "src/events/event_add.html", controller: "event_add_controller"});
  

  $routeProvider.otherwise({redirectTo: '/landing'});
}]);

var main_services = angular.module('main_app.services', []);
var main_controllers = angular.module('main_app.controllers', []);

am.run(function($rootScope, init_service) {
  console.log("run");
  $rootScope.lookups = {};
  $rootScope.api = {};

  $rootScope.login = {result : { token:''}};
  $rootScope.session = {};

  init_service.init_api_uris();
  init_service.init_lookup_selectors();
});



am.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    //scope.fileread = changeEvent.target.files[0];
                    // or all selected files:
                    scope.fileread = changeEvent.target.files;
                });
            });
        }
    };
}]);


