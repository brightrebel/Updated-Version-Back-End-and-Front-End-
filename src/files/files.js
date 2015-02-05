main_controllers.controller('files_controller', function($scope, $rootScope, $location, $http) {
  console.log('files_controller');
  navbar_remove_all_active();
  $("#navli_files").addClass("active");

  $scope.rs = $rootScope;

  $scope.ui = {};
  $scope.ui.invalid = {};
  $scope.uidirty = false;

  if (!$scope.rs.files){
    $scope.rs.ui_files = {};
    $scope.rs.ui_files.list = [];
  }

  get_file_list();
  function get_file_list(){
      var mypromise =  $http({
        method: 'GET',
        url: $rootScope.api_generic + '/persons/' + $rootScope.session.person_id + '/files',    
        params: {
          'foobar': new Date().getTime()
        }
      });
      mypromise.success(function(data, status, headers, config) {
        if (status == 200) {
          $scope.rs.ui_files.list = data;         //place the data into the rootScope(rs)
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
  }







  //Transform in HTTP is a function where we have the oppertunity to modify the HTTP data
  //In this case our data is not a JS object automatically translated to JSON
  //It is file opjects wich needs to be added. The JS object we do want to send we have to serialize ourselves.
  function transform(data){
    var formData = new FormData();  //Does not work for IE9 and smaller 
    for (var i = 0; i < $scope.ui.selected_files.length; i++) {
      formData.append("file" + i, $scope.ui.selected_files[i]);
    }
    //this is our own data we want to send along
    formData.append("mypayload", JSON.stringify(data));
    return formData;

    // Files
    // formData.append(name, file, filename);
    // Blobs
    // formData.append(name, blob, filename);
    // Strings
    // formData.append(name, value); 
  }

  $scope.upload_files_button = function (files) {

    var mypromise =  $http({
      method: 'POST',
      headers: { 'Content-Type': undefined },  //fforce HTTP to add it itself. Stating multipart/form-data yourself does not do the boundaries correctly.
      url: $rootScope.api_generic + '/files',
      transformRequest: transform,
      data: {person_id: $rootScope.session.person_id}
    });
    mypromise.success(function(data, status, headers, config) {
      if (status == 201) {
        alert("Files uploaded successfully");
        get_file_list();
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
        alert('Unknown error: ' + status + ' ' + data);
      }
    }

  };




});

main_controllers.controller('files_select_modal', function($scope, $rootScope, $location, $http, $modalInstance) {
  console.log('files_controller');
  navbar_remove_all_active();
  $("#navli_files").addClass("active");

  $scope.rs = $rootScope;

  $scope.ui = {};
  $scope.ui.invalid = {};
  $scope.ui.files = [];

  $scope.uidirty = false;

  get_file_list();
  function get_file_list(){
      var mypromise =  $http({
        method: 'GET',
        url: $rootScope.api_generic + '/persons/' + $rootScope.session.person_id + '/files',    
        params: {
          'foobar': new Date().getTime()
        }
      });
      mypromise.success(function(data, status, headers, config) {
        if (status == 200) {
          $scope.ui.files = data;         //place the data into the rootScope(rs)
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
  }

  $scope.ok = function(file_name){
    $modalInstance.close(file_name);
  };

  $scope.cancel = function(){
    $modalInstance.dismiss('cancel');
  };





});




main_controllers.controller('files_upload_modal', function($scope, $rootScope, $location, $http, $modalInstance) {
  console.log('files_controller');
  navbar_remove_all_active();
  $("#navli_files").addClass("active");

  $scope.rs = $rootScope;

  $scope.ui = {};
  $scope.ui.invalid = {};
  $scope.ui.selected_files = [];

  $scope.uidirty = false;



  function transform(data){
    var formData = new FormData();  //Does not work for IE9 and smaller 
    for (var i = 0; i < $scope.ui.selected_files.length; i++) {
      formData.append("file" + i, $scope.ui.selected_files[i]);
    }
    //this is our own data we want to send along
    formData.append("mypayload", JSON.stringify(data));
    return formData;
  }



  $scope.upload_files_button = function(){

    if (!$scope.ui.selected_files && $scope.ui.selected_files.length === 0 ){
      alert('no files selected');
      return;
    }

    var mypromise =  $http({
      method: 'POST',
      headers: { 'Content-Type': undefined },  //fforce HTTP to add it itself. Stating multipart/form-data yourself does not do the boundaries correctly.
      url: $rootScope.api_generic + '/files',
      transformRequest: transform,
      data: {person_id: $rootScope.session.person_id}
    });
    mypromise.success(function(data, status, headers, config) {
      if (status == 201) {
        //alert("Files uploaded successfully");
        console.log(JSON.stringify(data));
        $modalInstance.close(data[0].name);
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
        alert('Unknown error: ' + status + ' ' + data);
      }
      $modalInstance.dismiss('cancel');
    }

    
  };

  $scope.cancel = function(){
    $modalInstance.dismiss('cancel');
  };





});
