(function() {
	'use strict';

	angular.module('jobPhotoApp.utils.directives', [])
		.directive('cgmPhotoUpload', function() {
			return {
				restrict: 'E',
				templateUrl: '/modules/utils/views/photoUpload.html',
				scope: {
					account: '=accountAttr'
				},
				replace: true,
				link: function(scope, elem) {
					scope.progress = 0;
					scope.avatar = '';

					scope.fileChanged = function() {
						var fileName = elem.find('input[type="file"]').val();
						console.log('value changed ' + fileName);

						scope.$apply(function() {
							scope.avatar = fileName;
						});
					};
				}
			};
		});
})();