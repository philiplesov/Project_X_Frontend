var angular = angular.module('app', ['ngRoute']);

angular.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
		.when('/', {
			templateUrl: 'index.html',
			controller: 'MainController'
		})
	    .when('/users/register', {
			templateUrl: 'views/users/register.html',
			controller: 'UsersController'
        })
  }]);