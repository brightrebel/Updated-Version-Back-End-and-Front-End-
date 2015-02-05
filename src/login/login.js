function clear_session(rs){
  rs.token = "";
  rs.username = "";
}


main_controllers.controller('login_controller', function($http, $scope, $rootScope, $location) {
  navbar_remove_all_active();
  $("#navli_login").addClass("active");

  if (!$rootScope.session) {
    setup_auth_token($rootScope);
  }

  $scope.ui = {};

  $scope.ui_login_submit_test = function () {
    $scope.ui.username = 'marius@marius.com';
    $scope.ui.password = '1234';
    $scope.ui_login_submit();
  };

  $scope.ui_login_submit = function () {
      var mypromise =  $http({
        method: 'POST',
        url: $rootScope.api_generic + '/login',
        params: {
          'foobar': new Date().getTime()
        },
        data: {
          'auth_identifier':$scope.ui.username,
          'auth_password':$scope.ui.password
        }
      });
      mypromise.success(function(data, status, headers, config) {
        if (status == 201) {
          $rootScope.session.authed = true;
          $rootScope.session.token = data.token;
          $rootScope.session.username = data.username;
          $rootScope.session.person_id = data.person_id;
          $location.path('/events');
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



});


