angular.module('controller.home',['services.user'])

.controller('homeController', ['$scope','userAction','userRequest', function($scope , userAction, userRequest){
	$scope.num1 = 5,
	$scope.num2 = 3,
	$scope.student = {
		fname: 'kaneki',
		lname: 'ken',
		contact: 'vampiping',
		address: 'tokyo'
	},
	$scope.getSum = function() {
		return userAction.Sum($scope.num1,$scope.num2);
	},
	$scope.getInfo = userAction.getInfo($scope.student),
	$scope.users = userRequest.getUser()
}]);