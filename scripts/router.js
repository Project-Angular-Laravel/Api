'use strict';

angular.module('Noticias',['ngResource','ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/noticias',{
			templateUrl: 'views/noticia/index.html',
			controller: 'IndexNoticiaCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});