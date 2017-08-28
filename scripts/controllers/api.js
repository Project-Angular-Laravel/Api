'use strict';

angular.module('Noticias').controller('IndexApiCtrl', function($scope, ApiResource) {
	$scope.Noticias= ApiResource.query();
});