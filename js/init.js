
main_services.factory('init_service', function($rootScope) {
  var service_functions = {};

  service_functions.init_api_uris = function() {
    $rootScope.api_generic = 'http://memberbase.net:3008';
    //$rootScope.api_generic = 'http://localhost:3008';
  };

  service_functions.init_lookup_selectors = function() {
    // $rootScope.lookups.persons = [
    // ];

  };

  return service_functions;
});