var addCtrl = angular.module('addSuperheroCtrl', []);

addCtrl.controller('addSuperheroCtrl', function($scope, $http, filepickerService) {
    $scope.superhero = {};

    // Send the new superhero to the server to store in the DB
    $scope.createSuperhero = function() {
        $http.post('/superhero', $scope.superhero)
            .success(function(data) {
                console.log(JSON.stringify(data));
                // Clear the form
                $scope.superhero = {}
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Single file upload
    $scope.upload = function() {
        filepickerService.pick(
            {
                mimetype: 'image/*',
                language: 'en',
                services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH'],
                openTo: 'IMAGE_SEARCH'
            },
            function(Blob) {
                console.log(JSON.stringify(Blob));
                $scope.superhero.picture = Blob;
                $scope.$apply();
            }
        );
    };

    // Multiple files upload set to 3 as max
    $scope.uploadMultiple = function() {
        filepickerService.pickMultiple(
            {
                mimetype: 'image/*',
                language: 'en',
                maxFiles: 3,
                services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH'],
                openTo: 'IMAGE_SEARCH'
            },
            function(Blob) {
                console.log(JSON.stringify(Blob));
                $scope.superhero.picture = Blob;
                $scope.$apply();
            }
        );
    };
});
