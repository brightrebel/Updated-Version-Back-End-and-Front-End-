main_controllers.controller('edit_profile_controller', function($http, $scope, $rootScope, $location, $routeParams) {
  navbar_remove_all_active();
  $("#navli_profile").addClass("active");

  $scope.uidirty = false;
  $scope.ui = {};
  //$scope.uilookup = {};


  get_data();
  function get_data(){
    var mypromise =  $http({
      method: 'GET',
      url: $rootScope.api_generic + '/profile/' + $routeParams.id, //map to API server.js: app.get('/schools', schools.schools_get_one); 
      params: { 'foobar': new Date().getTime() }
    });
    mypromise.success(function(data, status, headers, config) {
      if (status == 200) {
        $scope.ui = data;
      } else {
        get_error(data);
      }
    });
    mypromise.error(function(data, status, headers, config) {
      get_error(data);
    });
    function get_error(data){
      if (data.message) {
        alert(data.message);
      } else {
        alert('Unknown error: ' + data);
      }
    }
  }








  $scope.ui_submit = function (formvalid) {
    //if (!formvalid) {
    //  $scope.uidirty = true;
    //  return;
    //}

    var mypromise =  $http({
      method: 'PUT',
      url: $rootScope.api_generic + '/profile/' + $routeParams.id, //map to API server.js: app.put('/schools', schools.schools_update_one); 
      params: { 'foobar': new Date().getTime() },
      data: $scope.ui
    });
    mypromise.success(function(data, status, headers, config) {
      console.log('Profile update success ',status);
      if (status == 200) {
        alert("Profile updated successfully");
      } else {
        update_error(data);
      }
    });
    mypromise.error(function(data, status, headers, config) {
      update_error(data);
    });
    function update_error(data){
      if (data.message) {
        alert(data.message);
      } else {
        alert('Unknown error: ' + data);
      }
    }


  };
});

