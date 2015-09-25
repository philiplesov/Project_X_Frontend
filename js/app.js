var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainController'
	}).when('/users/register', {
		templateUrl: 'views/users/register.html',
		controller:'UsersController'
	});
});