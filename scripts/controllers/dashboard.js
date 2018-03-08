angular.module('controller.dashboard',['services.user'])

.controller('dashboardController',['$scope','userAction','userRequest', function( $scope , userAction, userRequest){
	$scope.home = "active",
	$scope.profile = "",
	$scope.another = "",
	$scope.homeToggle =  function() {
		$scope.home = "active";
		$scope.profile = "";
		$scope.another = "";
	},
	$scope.profileToggle =  function() {
		$scope.home = "";
		$scope.profile = "active";
		$scope.another = "";
	},
	$scope.anotherToggle =  function() {
		$scope.home = "";
		$scope.profile = "";
		$scope.another = "active";
	},
	$scope.users = userRequest.getUser()
}]);