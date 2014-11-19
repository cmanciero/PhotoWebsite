(function() {
	'use strict';

	angular.module('jobPhotoApp.utils.filters', [])
		.filter('slice', function() {
			return function(arr, start, end) {
				return (arr || []).slice(start, end);
			};
		})
		.filter('voteBar', function() {
			return function(jobVotes, totalVotes) {
				var barPercent = (jobVotes / totalVotes) * 100;
				return Math.round(barPercent);
			};
		});
})();