(function() {
	'use strict';

	angular.module('jobPhotoApp.utils.services', [])
		.factory('linkedInService', ['$rootScope',
			function($rootScope) {
				var linkedInProfile = {},
					linkedInConnections = {},
					profileImage = '';

				return {
					setLinkedInProfile: function(profiles) {
						linkedInProfile = profiles.values[0];
						$rootScope.$broadcast('linkedInProfileSet', linkedInProfile);
					},
					getLinkedInProfile: function() {
						return linkedInProfile;
					},
					setLinkedInConnections: function(connections) {
						linkedInConnections = connections;
						$rootScope.$broadcast('linkedInConnectionsSet', linkedInConnections);
					},
					getLinkedInConnections: function() {
						return linkedInConnections;
					},
					setProfileImage: function(image) {
						profileImage = image.values[0];
						$rootScope.$broadcast('linkedInProfileImageSet', profileImage);
					},
					getProfileImage: function() {
						return profileImage;
					}
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
		.factory('jobsService', ['$http', '$q', '$rootScope',
			function($http, $q, $rootScope) {
				var arrJobsList = [];

				function randomSort() {
					return Math.random() - 0.5;
				}

				return {
					setJobsList: function() {
						return $http.get('modules/utils/js/jobs.json').then(function(response) {
							arrJobsList = response.data.jobs;
							$rootScope.$broadcast('jobsListSet', arrJobsList);
						}, function(response) {
							return $q.reject(response.data);
						});
					},
					getJobsList: function() {
						return arrJobsList;
					},
					getRandomJobs: function(numberOfJobs) {
						return arrJobsList.sort(randomSort).splice(0, numberOfJobs);
					},
					getRandomJob: function() {
						var randomNumber = Math.floor(Math.random() * arrJobsList.length);
						return arrJobsList[randomNumber].job;
					}
				};
			}
		]);
})();