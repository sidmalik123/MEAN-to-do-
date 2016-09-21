'use strict';

angular.module('todoListApp')
.service('dataService', function($http){

	this.getTodos = function(callback){
		$http.get('/api/todos').then(callback)
	}

	this.deleteTodo = function(todo, todos){
		if(!todo._id){alert('this todo is not saved.')}
		else{
			$http.delete('/api/todos/' + todo._id).then(function(res){
				console.log(res.status)
				if(res.status === 500){
					alert('could not delete todo!')
				}else{
					todos.forEach(function(todo, index){
						console.log(res.id)
						if(todo._id === res.data.id){
							todos.splice(index, 1);
							return;
						}
					})
				}
			})
		}
		
	}

	this.saveTodo = function(todo){
		console.log(todo)
		if(!todo._id){
			$http.post('/api/todos', todo).then(function(res){
				if(res.status === 500){
					alert('could not save :(');
				}else{
					todo.edited = false;
					todo._id = res.data.todo._id;
				}

			})
		}else{
			$http.put('/api/todos/' + todo._id, todo).then(function(res){
				if(res.status == 500){
					alert('could not update todo!')
				}else{
					todo.edited = false;
				}
			})
		}
	}


})