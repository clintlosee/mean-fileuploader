var app = angular.module('superheroApp', ['addSuperheroCtrl', 'galleryCtrl', 'detailCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider) {
        // Route provider handles client route switching
        $routeProvider.when('/addSuperhero', {
            templateUrl: 'partials/addSuperhero.html',
            controller: 'addSuperheroCtrl'
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'galleryCtrl'
        })
        .when('/detail/:id', {
            templateUrl: 'partials/detail.html',
            controller: 'detailCtrl'
        })
        // Redirect to addSuperhero in all other cases
        .otherwise({redirectTo: '/addSuperhero'});
        // Add the API key to use filestack service
        filepickerProvider.setKey('AD7vVuxkNQgKQTQK6WNmnz');
    });
