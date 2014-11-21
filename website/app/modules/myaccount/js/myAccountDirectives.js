(function() {
	'use strict';

	angular.module('jobPhotoApp.myaccount.directives', [])
		.directive('cgmMyJobsForm', ['linkedInService', 'weatherService', 'jobsService',
			function(linkedInService, weatherService, jobsService) {
				return {
					restrict: 'E',
					scope: {},
					replace: true,
					templateUrl: '/modules/myaccount/views/myJobs.html',
					link: function(scope) {
						scope.linkedInService = linkedInService;
						scope.myProfile = {};

						// get 3 random jobs
						scope.$on('jobsListSet', function() {
							var arrRandomJobs = jobsService.getRandomJobs(3);

							scope.jobOption1 = arrRandomJobs[0].job;
							scope.jobOption2 = arrRandomJobs[1].job;
							scope.jobOption3 = arrRandomJobs[2].job;
						});

						scope.weatherForecast = '';

						scope.$on('linkedInProfileSet', function(event, profile) {
							scope.myProfile = profile;
							scope.setValues(profile);
							scope.$apply();
						});

						scope.$on('linkedInConnectionsSet', function(event, connections) {
							console.log(connections);
							scope.$apply();
						});

						scope.changeJob = function(optionNumber) {
							switch (optionNumber) {
								case 1:
									scope.jobOption1 = jobsService.getRandomJob();
									break;
								case 2:
									scope.jobOption2 = jobsService.getRandomJob();
									break;
								case 3:
									scope.jobOption3 = jobsService.getRandomJob();
									break;
								default:
									break;
							}
						};

						scope.submitForm = function() {
							//promise examples
							// weatherService.getWeather('East Haven', 'CT').then(function(data) {
							// 	console.log(data);
							// 	scope.weatherForecast = data.weather[0].description;
							// }, function(error) {
							// 	console.log(error);
							// });

							// weatherService.getNewHavenWeather().then(function(data) {
							// 	console.log(data);
							// }, function(error) {
							// 	console.log(error);
							// });
						};

						scope.setValues = function(profile) {
							scope.myJobTitle = profile.headline;
						};
					}
				};
			}
		]);
})();