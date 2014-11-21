(function() {
	'use strict';

	angular.module('jobPhotoApp.utils.services', [])
		.factory('linkedInService', ['$rootScope',
			function($rootScope) {
				var linkedInProfile = {};
				var linkedInConnections = {};
				var id = 0;

				// get profile
				this.getProfile = function() {
					id = setInterval(checkForProfile, 500);
				};

				// set linkedIn profile
				this.setProfile = function(profiles) {
					linkedInProfile = profiles.values[0];
				};

				// check to see if profile value is set
				var checkForProfile = function() {
					if (linkedInProfile.hasOwnProperty('id')) {
						clearInterval(id);
					}
					$rootScope.$apply();
				};

				// return linkedIn profile
				this.getLinkedInProfile = function() {
					return linkedInProfile;
				};

				this.setLinkedInConnections = function(connections) {
					linkedInConnections = connections;
				};

				this.getLinkedInConnections = function() {
					return linkedInConnections;
				};

				return {
					setLinkedInProfile: this.setProfile,
					getProfile: this.getProfile,
					getLinkedInProfile: this.getLinkedInProfile,
					setLinkedInConnections: this.setLinkedInConnections,
					getLinkedInConnections: this.getLinkedInConnections
				};
			}
		])
		.factory('weatherService', ['$http', '$q',
			function($http, $q) {
				return {
					getWeather: function(city, country) {
						var query = city + ',' + country;
						return $http.get('http://api.openweathermap.org/data/2.5/weather', {
								params: {
									q: query
								}
							})
							.then(function(response) {
								if (typeof response.data === 'object') {
									return response.data;
								} else {
									return $q.reject(response.data);
								}
							}, function(response) {
								return $q.reject(response.data);
							});
					},
					getNewHavenWeather: function() {
						var query = 'New Haven, CT';
						return $http.get('http://api.openweathermap.org/data/2.5/weather', {
								params: {
									q: query
								}
							})
							.then(function(response) {
								if (typeof response.data === 'object') {
									return response.data;
								} else {
									return $q.reject(response.data);
								}
							}, function(response) {
								return $q.reject(response.data);
							});
					}
				};
			}
		])
		.factory('jobsService', ['$http', '$q',
			function($http, $q) {
				return {
					getJobsList: function() {
						return $http.get('modules/utils/js/jobs.json').then(function(response) {
							var jobs = response.data.jobs;
							for (var i = 0, j = jobs.length; i < j; i += 1) {
								console.log(jobs[i].job);
							}
						}, function(response) {
							return $q.reject(response.data);
						});
					}
				};
			}
		]);
})();