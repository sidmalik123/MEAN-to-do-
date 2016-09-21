'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){
	$scope.init = function(todo){
		if(!todo.completed){
			todo.completed = false;
		}
	}

	$scope.addTodo = function(){
		var todo = {"name": "New Todo"};
		$scope.todos.unshift(todo);
	}

	dataService.getTodos(function(res){
		console.log(res.data)
		$scope.todos = res.data.reverse();
		
	})

	$scope.deleteTodo = function(todo){
		dataService.deleteTodo(todo, $scope.todos);
	}

	$scope.saveTodo = function(todo){
		dataService.saveTodo(todo);
	}

	$scope.resetTodoState = function(todo){
		todo.edited = false;
	}

})