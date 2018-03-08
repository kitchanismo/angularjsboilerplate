
angular.module('directives.templates',[])

.directive('appRoot', function(){
	return {
		templateUrl: 'app.html',
		controller: 'mainController'
	}
})

.directive('navBar', function(){
	return {
		templateUrl: 'partials/templates/navbar.html',
		controller: 'navbarController'
	}
})

.directive('appFooter', function(){
	return {
		templateUrl: 'partials/templates/footer.html'
	}
})

.directive('appTable', function(){
	return {
		templateUrl: 'partials/templates/table.html'
	}
})