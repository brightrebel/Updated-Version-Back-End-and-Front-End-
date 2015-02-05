main_controllers.controller('menu_controller', function($scope, $rootScope, $location) {
  $scope.rs = $rootScope;

  $scope.logout = function () {
    $rootScope.session = {};
    $rootScope.ui_persons = {};
    $rootScope.ui_persons.list = {};
    $rootScope.ui_schools = {};
    $rootScope.ui_schools.list = {};
    $location.path('/landing');
  };

  $scope.landing_button = function () {
    $location.path('/landing');
  };

  $scope.login_button = function () {
    $location.path('/login');
  };

  $scope.persons_button = function () {
    $location.path('/persons');
  };

  // $scope.register_button = function () {
  //   $location.path('/register');
  // };

  $scope.add_subjects_button = function () {
    $location.path('/subjects_add');
    
  };

  $scope.profile_button = function () {
    $location.path('/profile_edit');
  };

  $scope.files_button = function () {
    $location.path('/files');
  };

  $scope.events_button = function () {
    $location.path('/events');
  };

  $scope.add_events_button = function () {
    $location.path('/events_add');
  };




});