angular.module('services.user',[])

.factory('userAction', function(){
	return {
		getInfo: function(student) {
			return student.fname +  ' ' + student.lname + ' '  + student.contact + ' ' + student.address;
		},
		Sum: function(num1, num2) {
		var pi = 3.41;
			return parseInt(num1) * parseInt(num2) * pi;
		}
	}
})

.factory('userRequest', function(){
	return {
		getUser: function() {
			return [{
				username: 'kitchanismo',
				fname: 'cristian',
				lname: 'betsayda'
			}, 
			{
				username: 'nechi',
				fname: 'natasha',
				lname: 'navarro'
			}, 
			{
				username: 'tasha',
				fname: 'natasha',
				lname: 'navarro'
			}]
		}
	}
})