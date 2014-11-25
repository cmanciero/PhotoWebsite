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
				link: function(scope) {
					scope.progress = 0;

					scope.fileChanged = function(event) {

						var files = event.files;

						// Loop through the FileList and render image files as thumbnails.
						for (var i = 0, f = files.length; i < f; i++) {

							// Only process image files.
							if (!files[i].type.match('image.*')) {
								continue;
							}

							var reader = new FileReader();

							// Closure to capture the file information.
							reader.onload = displayImage(files[i]);

							// Read in the image file as a data URL.
							reader.readAsDataURL(files[i]);
						}
					};

					scope.changePhoto = function() {
						$('#fileSelection').click();
					};

					// take the file selected and show it on the page
					function displayImage(theFile) {
						return function(e) {
							// Render thumbnail.
							var myPhoto = document.getElementById('myPhoto');
							myPhoto.src = e.target.result;
							myPhoto.title = theFile.name;
						};
					}
				}
			};
		});
})();