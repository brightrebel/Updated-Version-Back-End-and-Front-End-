main_controllers.controller('register_controller', function($scope, $rootScope, $http, $location) {
  navbar_remove_all_active();
  $("#navli_register").addClass("active");

  $scope.ui = {};
  $scope.uidirty = false;

  $scope.rs = $rootScope;

  $scope.$watch("ui",function() {
    var custom_valid = validate_form($scope, $rootScope);
  },true);

  $scope.submit_button = function (formvalid) {
    if (!formvalid) {
      $scope.uidirty = true;
      alert('Please check, some entries are not valid.');
      return;
    }
    if (!validate_form($scope, $rootScope)) {
      $scope.uidirty = true;
      alert('Please check, some entries are invalid.');
      return;
    }

    var payload = {};
    payload.firstname = $scope.ui.firstname;
    payload.lastname = $scope.ui.lastname;
    payload.email = $scope.ui.email;
    payload.password = $scope.ui.password;

    var mypromise =  $http({
      method: 'POST',
      url: $rootScope.api_generic + '/register',
      params: { 'foobar': new Date().getTime() },
      data: payload
    });
    mypromise.success(function(data, status, headers, config) {
      if (status == 201) {
        $location.path('/register_confirmation');
      } else {
        http_error(data);
      }
    });
    mypromise.error(function(data, status, headers, config) {
      http_error(data);
    });
    function http_error(data){
      if (data.message) {
        alert(data.message);
      } else {
        alert('Unknown error: ' + data);
      }
    }
  };

  function validate_form($scope, $rootScope){
    var validate_ok = true;
    $scope.ui.invalid = {};
    
    if (!$scope.ui.accept_tac) {
      $scope.ui.invalid.accept_tac = true;
      validate_ok = false;
    }

    return validate_ok;
  }



});



