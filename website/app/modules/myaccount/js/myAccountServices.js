(function() {
	'use strict';

	angular.module('jobPhotoApp.myaccount.services', [])
		.factory('jobService', function() {
			return {
				findTopJob: function(arrJobs) {
					var topJob = '',
						topJobCount = 0;

					arrJobs.forEach(function(item) {
						if (item.votes > topJobCount) {
							topJobCount = item.votes;
							topJob = item.title;
						}
					});

					return topJob;
				}
			};
		});
})();