main_controllers.controller('persons_controller', function($http, $scope, $rootScope, $location) {
  navbar_remove_all_active();
  $("#navli_persons").addClass("active");

  $scope.rs = $rootScope;
  $scope.ui = {};

  if (!$scope.rs.ui_persons){
    $scope.rs.ui_persons = {};
    $scope.rs.ui_persons.list = [];
  }

  $scope.ui_get_persons_button = function () {
      var mypromise =  $http({
        method: 'GET',
        url: $rootScope.api_generic + '/persons',
        params: {
          'foobar': new Date().getTime()
        }
      });
      mypromise.success(function(data, status, headers, config) {
        if (status == 200) {
          $scope.rs.ui_persons.list = data;
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

  //$scope.ui_get_persons_button();

  var grid_open_template = '<div>';
  grid_open_template += '<button type="button" class="btn btn-xs" ng-click="view_person(row.entity[col.field])">';
  grid_open_template += '<i class="fa fa-arrow-right"></i>';
  grid_open_template += '</button>';
  grid_open_template += '</div>';


 var grid_delete_template = '<div>';
  grid_delete_template += '<button type="button" class="btn btn-xs" ng-click="delete_person(row.entity[col.field])">';
  grid_delete_template += '<i class="fa fa-trash-o"></i>';
  grid_delete_template += '</button>';
  grid_delete_template += '</div>';


var grid_edit_template = '<div>';
  grid_edit_template += '<button type="button" class="btn btn-xs" ng-click="edit_person_icon(row.entity[col.field])">';
  grid_edit_template += '<i class="fa fa-pencil"></i>';
  grid_edit_template += '</button>';
  grid_edit_template += '</div>';
  //row.entity[\'product\'],

  $scope.view_person = function(pid){
    console.log(pid);
    $location.path('/person/' + pid );
  };

  $scope.edit_person_icon = function(pid){
      console.log(pid)
      $location.path('/person_edit/' + pid);
  };

  $scope.grid_cols_def = [
    {field: '_id', displayName: 'Open', width: 60, cellTemplate : grid_open_template, editableCellTemplate : grid_open_template },
    {field: '_id', displayName: 'Delete', width: 60, cellTemplate : grid_delete_template, editableCellTemplate : grid_delete_template },
    {field: '_id', displayName: 'Edit', width: 60, cellTemplate : grid_edit_template, editableCellTemplate : grid_edit_template },
    {field: 'name', displayName: 'Name', width: 200},
    {field: 'email', displayName: 'Email', width: 200}
  ];
  $scope.grid_filter_options = {
    filterText: ''
  };

  $scope.grid_options = {
    data: 'rs.ui_persons.list',
    enableCellSelection: false,
    enableRowSelection: false,
    enableCellEditOnFocus: true,
    columnDefs: 'grid_cols_def',
    enablePaging: true,
    filterOptions: $scope.grid_filter_options
  };

$scope.delete_person = function(pid){
      var mypromise =  $http({
        method: 'DELETE',
        url: $rootScope.api_generic + '/persons/' + pid,
        params: {
          'foobar': new Date().getTime()
        }
      });
      mypromise.success(function(data, status, headers, config) {
        if (status == 200) {
          $scope.ui_get_persons_button();
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



main_controllers.controller('person_controller', function($http, $scope, $rootScope, $location, $routeParams) {
  navbar_remove_all_active();
  $("#navli_persons").addClass("active");

  $scope.rs = $rootScope;
  $scope.ui = {};


  $scope.ui_get_person_button = function () {
      var mypromise =  $http({
        method: 'GET',
        url: $rootScope.api_generic + '/persons/' + $routeParams.id,
        params: {
          'foobar': new Date().getTime()
        }
      });
      mypromise.success(function(data, status, headers, config) {
        if (status == 200) {
          $scope.ui = data;
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

  $scope.ui_get_person_button();

  $scope.ui_edit_person_button = function(){
    if ($scope.ui._id){
      $location.path('/person_edit/' + $scope.ui._id);
    }

  };

});

main_controllers.controller('edit_person_controller', function($http, $scope, $rootScope, $location, $routeParams) {
  navbar_remove_all_active();
  $("#navli_persons").addClass("active");

  $scope.uidirty = false;
  $scope.ui = {};
  //$scope.uilookup = {};


  get_data();
  function get_data(){
    var mypromise =  $http({
      method: 'GET',
      url: $rootScope.api_generic + '/persons/' + $routeParams.id, //map to API server.js: app.get('/schools', schools.schools_get_one); 
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
      url: $rootScope.api_generic + '/persons/' + $routeParams.id, //map to API server.js: app.put('/schools', schools.schools_update_one); 
      params: { 'foobar': new Date().getTime() },
      data: $scope.ui
    });
    mypromise.success(function(data, status, headers, config) {
      console.log('Person update success ',status);
      if (status == 200) {
        alert("Person updated successfully");
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

