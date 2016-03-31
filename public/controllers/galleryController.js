var galleryCtrl = angular.module('galleryCtrl', []);

galleryCtrl.controller('galleryCtrl', function($scope, $http) {
    $scope.superheroes = [];

    // Retrieve all the superheroes for gallery
    $http.get('/superhero')
        .success(function(data) {
            console.log(JSON.stringify(data));
            $scope.superheroes = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});
