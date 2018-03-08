
var app = angular.module('app',[
    'directives.templates',

    'config.routes',

    'services.user',

    'controller.main',
    'controller.home',
	'controller.signin',
	'controller.navbar',
	'controller.dashboard',
	'controller.about',
	'controller.footer'
]);

app.run(['$rootScope', function($rootScope) {
  $rootScope.appTheme = "success";
}]);

