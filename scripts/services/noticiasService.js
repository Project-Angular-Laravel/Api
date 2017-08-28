'use strict';

angular.module('Api')
	.factory('ApiResource', function($resource) {
		return $resource("http://localhost:8000/noticias/:id", {
			id: "@id"
		}, {
			update: {
				method: "PUT"
			}
		});
	});