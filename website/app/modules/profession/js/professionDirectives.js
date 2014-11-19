(function() {
	'use strict';

	angular.module('jobPhotoApp.profession.directives', [])
		.directive('cgmSelectProfession', function() {
			return {
				restrict: 'E',
				scope: {
					jobs: '=jobsAttr'
				},
				replace: true,
				templateUrl: '/modules/profession/views/yourProfession.html',
				link: function(scope) {
					scope.isEdit = false;
					scope.editJob = function() {
						scope.isEdit = !scope.isEdit;
					};

					scope.changeJob = function() {
						scope.editJob();
					};
				}
			};
		});
})();