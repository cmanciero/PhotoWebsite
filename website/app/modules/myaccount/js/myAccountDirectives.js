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
						linkedInService.getProfile();
						// get list of jobs
						jobsService.setJobsList();

						scope.weatherForecast = '';

						// watch to see if linkedIn profile gets set/updated
						scope.$watch('linkedInService.getLinkedInProfile()', function(newVal) {
							scope.myProfile = newVal;
							scope.setValues(newVal);
						});

						scope.$watch('linkedInService.getLinkedInConnections()', function(newVal) {
							console.log(newVal);
						});

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

							// get list of all jobs
							console.log(jobsService.getJobsList());
							// get number of random jobs
							console.log(jobsService.getRandomJobs(3));
							// get one random job
							console.log(jobsService.getRandomJob());
						};

						scope.setValues = function(profile) {
							scope.myJobTitle = profile.headline;
						};
					}
				};
			}
		]);
})();