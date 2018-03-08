angular.module('controller.navbar',[])

.controller('navbarController', ['$scope', function($scope) {
	$scope.brandName = "KITCHANISMO";
	$scope.isActiveDash= "active";
	$scope.isActiveAbout= '';
}]);