/*
This is the controller that controls the functions within the schools.html file
These functions include 
- ui_get_schools_button()
- view_school
- delete_school
- edit_school_icon
*/
main_controllers.controller('events_controller', function($http, $scope, $rootScope, $location) {
  navbar_remove_all_active();
  $("#navli_events").addClass("active");

  $scope.rs = $rootScope;
  $scope.ui = {};
  $scope.ui.event_type_filter = "";

  if (!$scope.rs.ui_events){
    $scope.rs.ui_events = {};
    $scope.rs.ui_events.list = [];
  }



  /*
  A function that uses GET and links to the backend 
  with url: $rootScope.api_generic + '/events', and 
  then places the recieved data into the rootScope 
  */

function get_events(event_type) {
    var mypromise =  $http({
      method: 'GET',
      url: $rootScope.api_generic + '/events',    //map to API server.js: app.get('/events', events.events_list);
      params: {
        'profile_id': $rootScope.session.profile_id,
        'event_type': event_type,
        'foobar': new Date().getTime()
      }
    });
    mypromise.success(function(data, status, headers, config) {
      if (status == 200) {
          $scope.rs.ui_events.list = data;         //place the data into the rootScope(rs)
          render_events();
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

get_events("");
  $scope.events_button = function (event_type) {
    if ($scope.ui.event_type == event_type){
      $scope.ui.event_type = "";
    } else {
      $scope.ui.event_type = event_type;
    }
    get_events($scope.ui.event_type);
    console.log($scope.ui.event_type);
  };


  function render_events(){
    if ($scope.rs.ui_events.list.length === 0){
      return;
    }

    for (var i=0;i < $scope.rs.ui_events.list.length;i++){
      var a = $scope.rs.ui_events.list[i];
      a.imagename = "";
      if (!a.eventbody){
        a.eventbody = [];
      }
      for (var j=0;j < a.eventbody.length;j++){
        if (a.eventbody[j].type == "pic"){
          a.imagename = a.eventbody[j].name;
          console.log(a.imagename);
          break;
        }
      }
    }

    // $scope.rs.ui_events.list1 = $scope.rs.ui_events.list.splice(0,3);

  }






  // $scope.events_button = function (event_type) {
  //     var mypromise =  $http({
  //       method: 'GET',
  //       url: $rootScope.api_generic + '/events',    //map to API server.js: app.get('/events', events.events_list);
  //       params: {
  //         'profile_id': $rootScope.session.profile_id,
  //         'event_type': event_type,
  //         'foobar': new Date().getTime()
  //       }
  //     });
  //     mypromise.success(function(data, status, headers, config) {
  //       if (status == 200) {
  //         $scope.rs.ui_events.list = data;         //place the data into the rootScope(rs)
  //         $scope.ui.event_type_filter = event_type;
  //         if ($scope.ui.event_type_filter == event_type){
  //           $scope.ui.event_type_filter = "";
  //         } else {
  //           $scope.ui.event_type_filter = event_type;
  //         }
  //         get_events($scope.ui.event_type_filter);
  //       } else {
  //         http_error(data);
  //       }
  //     });
  //     mypromise.error(function(data, status, headers, config) {
  //       http_error(data);
  //     });
  //     function http_error(data){
  //         if (data.message) {
  //           alert(data.message);
  //         } else {
  //           alert('Unknown error: ' + data);
  //         }
  //     }
  // };

//create the arrow button that opens the individual school
  var grid_open_template = '<div>';
  grid_open_template += '<button type="button" class="btn btn-xs" ng-click="view_event(row.entity[col.field])">';
  grid_open_template += '<i class="fa fa-arrow-right"></i>';
  grid_open_template += '</button>';
  grid_open_template += '</div>';

  //create the bin button that deletes the individual school
  var grid_delete_template = '<div>';
  grid_delete_template += '<button type="button" class="btn btn-xs" ng-click="delete_event(row.entity[col.field])">';
  grid_delete_template += '<i class="fa fa-trash-o"></i>';
  grid_delete_template += '</button>';
  grid_delete_template += '</div>';

  var grid_edit_template = '<div>';
  grid_edit_template += '<button type="button" class="btn btn-xs" ng-click="edit_event_icon(row.entity[col.field])">';
  grid_edit_template += '<i class="fa fa-pencil"></i>';
  grid_edit_template += '</button>';
  grid_edit_template += '</div>';

  var grid_yn_template = '<span ng-show="row.getProperty(col.field)">';
  grid_yn_template += '&nbsp;<i class="fa fa-check"></i>';
  grid_yn_template += '</span>';

  $scope.image_uri = function(file_name){
      return $scope.rs.api_generic + "/files/" + file_name;
  };

  var grid_img_template = '<span ng-show="row.getProperty(col.field)">';
  grid_img_template += '<img ng-src="{{image_uri(row.entity[col.field])}}" style="max-height:73px"/>';
  grid_img_template += '</span>';

  /*  A function that redirects the browser to view the selected school
  */
  $scope.view_event = function(pid){
    console.log(pid);
    $location.path('/event/' + pid );
  };

  $scope.edit_event_icon = function(pid){
    console.log(pid);
    $location.path('/event_edit/' + pid);
  };

//builds the grid within which the schools will apear as a list
  $scope.grid_cols_def = [
    {field: '_id', displayName: 'Open', width: 55, cellTemplate : grid_open_template, editableCellTemplate : grid_open_template },
    {field: '_id', displayName: 'Delete', width: 55, cellTemplate : grid_delete_template, editableCellTemplate : grid_delete_template },
    {field: '_id', displayName: 'Edit', width: 55, cellTemplate : grid_edit_template, editableCellTemplate : grid_edit_template },
    {field: 'eventname', displayName: 'Name', width: 200},
    {field: 'eventtype_retail', displayName: 'Retail', width: 55, cellTemplate : grid_yn_template, editableCellTemplate : grid_yn_template },
    {field: 'eventtype_media', displayName: 'Media', width: 55, cellTemplate : grid_yn_template, editableCellTemplate : grid_yn_template },
    {field: 'eventtype_studio', displayName: 'Studio', width: 55, cellTemplate : grid_yn_template, editableCellTemplate : grid_yn_template },
    {field: 'eventtype_art', displayName: 'Art', width: 55, cellTemplate : grid_yn_template, editableCellTemplate : grid_yn_template },
    {field: 'eventtype_it', displayName: 'IT', width: 55, cellTemplate : grid_yn_template, editableCellTemplate : grid_yn_template },
    {field: 'imagename', displayName: 'Images', width: 155, cellTemplate : grid_img_template, editableCellTemplate : grid_img_template },
    {field: 'eventlocation', displayName: 'Location', width: 200}
  ];
  $scope.grid_filter_options = {
    filterText: ''
  };

//Seting for the grid that contains the schools
  $scope.grid_options = {
    rowHeight: 80,
    data: 'rs.ui_events.list',
    enableCellSelection: false,
    enableRowSelection: false,
    enableCellEditOnFocus: true,
    columnDefs: 'grid_cols_def',
    enablePaging: true,
    filterOptions: $scope.grid_filter_options
  };


  /*
  A function that uses DELETE and links to the backend 
  with url: $rootScope.api_generic + '/events/' + pid, and 
  after deleting the selected school it recalls the 
  ui_get_events_button() function to reload the list of 
  events in the grid
  */
  $scope.delete_event = function(pid){
      var mypromise =  $http({
        method: 'DELETE',
        url: $rootScope.api_generic + '/events/' + pid,    //map to API server.js: app.delete('/events/:id', events.events_delete_one);
        params: {
          'foobar': new Date().getTime()
        }
      });
      mypromise.success(function(data, status, headers, config) {
        if (status == 200) {
          $scope.events_button();       // Recalls the ui_get_events_button() function to reload the list of events in the grid
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
    $scope.add_event_button = function(){
      $location.path('/event_add');
  };

});






/*

*/
main_controllers.controller('event_controller', function($http, $scope, $rootScope, $location, $routeParams) {
  navbar_remove_all_active();
  $("#navli_event").addClass("active");

  $scope.rs = $rootScope;
  $scope.ui = {};



  /*

  */
  $scope.ui_get_event_button = function () {
      var mypromise =  $http({
        method: 'GET',
        url: $rootScope.api_generic + '/events/' + $routeParams.id,
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

  $scope.ui_get_event_button();



  /*

  */
  $scope.ui_edit_event_button = function(){
    if ($scope.ui._id){
      $location.path('/event_edit/' + $scope.ui._id);
    }

  };

});





/*

*/
main_controllers.controller('event_add_controller', function($scope, $rootScope, $http, $location) {
  navbar_remove_all_active();
  $("#navli_add_events").addClass("active");

  $scope.ui = {};
  $scope.uidirty = false;

  $scope.rs = $rootScope;

  $scope.$watch("ui",function() {
    var custom_valid = validate_form($scope, $rootScope);
  },true);


  /*

  */
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
    payload.eventname = $scope.ui.eventname;
    payload.eventtype_retail = $scope.ui.eventtype_retail;
    payload.eventtype_media = $scope.ui.eventtype_media;
    payload.eventtype_studio = $scope.ui.eventtype_studio;
    payload.eventtype_art = $scope.ui.eventtype_art;
    payload.eventtype_it = $scope.ui.eventtype_it;
    payload.eventlocation = $scope.ui.eventlocation;
    payload.eventshort = $scope.ui.eventshort;
    payload.eventlong = $scope.ui.eventlong;
    payload.person_id = $rootScope.session.person_id;
    // payload.eventimage = $scope.ui.eventimage;


    var mypromise =  $http({
      method: 'POST',
      url: $rootScope.api_generic + '/events',   //map to API server.js: app.post('/events', events.events_add_one); 
      params: { 'foobar': new Date().getTime() },
      data: payload
    });
    mypromise.success(function(data, status, headers, config) {
      if (status == 201) {
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



  /*

  */
  function validate_form($scope, $rootScope){
    var validate_ok = true;
    $scope.ui.invalid = {};
    
    if (!$scope.ui.eventtype_retail && !$scope.ui.eventtype_media && !$scope.ui.eventtype_studio && !$scope.ui.eventtype_art && !$scope.ui.eventtype_it) {
      $scope.ui.invalid.eventtype_retail = true;
      $scope.ui.invalid.eventtype_media = true;
      $scope.ui.invalid.eventtype_studio = true;
      $scope.ui.invalid.eventtype_art = true;
      $scope.ui.invalid.eventtype_it = true;
      validate_ok = false;
    }
    return validate_ok;
  }

});





/*
$modal
files.js ---> files_upload_modal controller ($modalInstance)
*/
main_controllers.controller('event_edit_controller', function($http, $scope, $rootScope, $location, $routeParams, $modal) {
  navbar_remove_all_active();
  $("#navli_events").addClass("active");

  $scope.uidirty = false;
  $scope.ui = {};
  $scope.ui.eventbody = [];
  //$scope.uilookup = {};

  $scope.rs = $rootScope;

  get_data();

  function get_data(){
    var mypromise =  $http({
      method: 'GET',
      url: $rootScope.api_generic + '/events/' + $routeParams.id, //map to API server.js: app.get('/events', events.events_get_one); 
      params: { 'foobar': new Date().getTime() }
    });
    mypromise.success(function(data, status, headers, config) {
      if (status == 200) {
        $scope.ui = data;
        if (!$scope.ui.eventbody){
          $scope.ui.eventbody = [];    // ilf there is no eventbody in the db (if it is a new event) then set eventbody as an empty array
        }
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



  $scope.pic_select = function(blob_index){
    var modalInstance = $modal.open({
      templateUrl: 'src/files/modal_select_file.html',
      controller: 'files_select_modal',
      size:'lg',
      resolve: {
        injectdata: function(){
          return "something";
        }
      }
    });

    modalInstance.result.then(function(file_name){
      $scope.ui.eventbody[blob_index].name = file_name;
    }, function(){
      //too bad
    });
  };

  $scope.pic_upload = function(blob_index){
    var modalInstance = $modal.open({
      templateUrl: 'src/files/modal_upload_file.html',
      controller: 'files_upload_modal',
      size:'lg',
      resolve: {
        injectdata: function(){
          return "something";
        }
      }
    });

    modalInstance.result.then(function(file_name){
      $scope.ui.eventbody[blob_index].name = file_name;
    }, function(){
      //too bad
    });
  };

  /*

  */
  $scope.ui_submit = function (formvalid) {
    //if (!formvalid) {
    //  $scope.uidirty = true;
    //  return;
    //}

    var mypromise =  $http({
      method: 'PUT',
      url: $rootScope.api_generic + '/events/' + $routeParams.id, //map to API server.js: app.put('/events', events.events_update_one); 
      params: { 'foobar': new Date().getTime() },
      data: $scope.ui
    });
    mypromise.success(function(data, status, headers, config) {
      console.log('event update success ',status);
      if (status == 200) {
        alert("event updated successfully");
        $location.path('/events');
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

    //   function questionCtrl($scope){
    // var counter=0;
    // $scope.questionelemnt = [ {id:counter, question : 'Question-Click on me to edit!', answer : '',inline:true} ];

    // $scope.newItem = function($event){
    //     counter++;
    //     $scope.questionelemnt.push(  { id:counter, question : 'Question-Click on me to edit!', answer : '',inline:true} );
    //     $event.preventDefault();
    // };
    // $scope.inlinef= function($event,inlinecontrol){
    //     var checkbox = $event.target;
    //     if(checkbox.checked){
    //         $('#'+ inlinecontrol).css('display','inline');
    //     }else{
    //         $('#'+ inlinecontrol).css('display','');
    //     }

    // }
    // $scope.showitems = function($event){
    //     $('#displayitems').css('visibility','none');
    // }

    $scope.blob_remove = function(index){
      $scope.ui.eventbody.splice(index, 1);
    };
    $scope.blob_add_text = function(index){
      var b = {
        type:"text",
        text:""
      };
      $scope.ui.eventbody.splice(index + 1,0,b);
    };
    $scope.blob_add_pic = function(index){
      var b = {
        type:"pic"
      };
      $scope.ui.eventbody.splice(index + 1,0,b);      
    };

});
