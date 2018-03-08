"use strict";

angular.module('config.routes',['ngRoute'])

.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider
    .when('/', { 
         templateUrl: 'partials/pages/home.html', 
         controller: 'homeController' 
    })
    .when('/about', { 
         templateUrl: 'partials/pages/about.html', 
         controller: 'aboutController' 
    })
    .when('/signin', { 
         templateUrl: 'partials/pages/signin.html',
         controller: 'signinController'
    })
    .when('/signup', { 
         templateUrl: 'partials/pages/signup.html'
    })
    .when('/dashboard', { 
         templateUrl: 'partials/pages/dashboard.html', 
         controller: 'dashboardController'

    })
    .otherwise({
        redirectTo: function () {
          return '/';
        }
    })
   //get rid of hash bang(!)
   $locationProvider.hashPrefix('');
   // $locationProvider.html5Mode(true);
}]); 