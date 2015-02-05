main_controllers.controller('landing_controller', function($scope, $rootScope, $location, $http) {
  console.log('landing_controller');
  navbar_remove_all_active();
  $("#navli_landing").addClass("active");

  $scope.rs = $rootScope;

  $scope.ui = {};
  $scope.ui.invalid = {};
  $scope.ui.event_type = "";
  $scope.uidirty = false;

  if (!$scope.rs.ui_landing){
    $scope.rs.ui_landing = {};
    $scope.rs.ui_landing.list = [];
    $scope.rs.ui_landing.list1 = [];
    $scope.rs.ui_landing.list2 = [];
  }


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
	      	$scope.rs.ui_landing.list = data;         //place the data into the rootScope(rs)
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
		if ($scope.rs.ui_landing.list.length === 0){
			return;
		}

		for (var i=0;i < $scope.rs.ui_landing.list.length;i++){
			var a = $scope.rs.ui_landing.list[i];
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

		// $scope.rs.ui_landing.list1 = $scope.rs.ui_landing.list.splice(0,3);

	}





});

