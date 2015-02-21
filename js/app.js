angular.module("sitenameApp", ["ngRoute","sitenameController"])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'sitenameController1'
      }).
      when('/schools', {
        templateUrl: 'partials/schools.html',
        controller: 'sitenameController'
      }).
      when('/team', {
        templateUrl: 'partials/team.html',
        controller: 'sitenameController'
      }).
      when('/donate', {
        templateUrl: 'partials/donate.html',
        controller: 'sitenameController'
      }).
      when('/batches', {
        templateUrl: 'partials/batches.html',
        controller: 'sitenameController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }])
  .controller("headerController", function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });

