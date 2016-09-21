'use strict'


angular.module('todoListApp')
.directive('todos', function(){
	return {
		templateUrl : '/static/html/todos.html',
		controller : 'mainCtrl',
		replace: true
	}
})