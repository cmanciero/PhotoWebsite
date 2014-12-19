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
						scope.myProfile = scope.linkedInService.getLinkedInProfile() || {};
						scope.weatherForecast = '';
						scope.myConnections = scope.linkedInService.getLinkedInConnections() || {};

						// set random job for passed in option
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
							var arrJobTitle = profile.headline.split(' at');

							if (arrJobTitle.length > 0) {
								scope.myJobTitle = arrJobTitle[0];
							} else {
								scope.myJobTitle = profile.headline;
							}
						};

						// set random jobs for all other options
						scope.setOtherJobs = function() {
							var arrRandomJobs = jobsService.getRandomJobs(3);

							scope.jobOption1 = arrRandomJobs[0].job;
							scope.jobOption2 = arrRandomJobs[1].job;
							scope.jobOption3 = arrRandomJobs[2].job;
						};

						// get 3 random jobs
						scope.$on('jobsListSet', function() {
							scope.setOtherJobs();
						});

						// check to see if my profile from linked in is set
						if (scope.myProfile.hasOwnProperty('id')) {
							scope.setValues(scope.myProfile);
						} else {
							scope.$on('linkedInProfileSet', function(event, profile) {
								scope.$apply(function() {
									scope.myProfile = profile;
									scope.setValues(profile);
								});
							});
						}

						// check to see job option 1 is set
						if (!scope.jobOption1) {
							scope.changeJob(1);
						}

						// check to see job option 2 is set
						if (!scope.jobOption2) {
							scope.changeJob(2);
						}

						// check to see job option 3 is set
						if (!scope.jobOption3) {
							scope.changeJob(3);
						}

						if (scope.myConnections.values && scope.myConnections.values.length > 0) {
							console.log(scope.myConnections);
						} else {
							scope.$on('linkedInConnectionsSet', function(event, connections) {
								scope.$apply(function() {
									console.log(connections);
									scope.myConnections = connections;
								});
							});
						}
					}
				};
			}
		]);
})();