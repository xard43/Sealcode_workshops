// Variables
var addNewTaskForm = document.querySelector('#buttonAdd');
var tasksContainer = document.querySelector('article ul');


//On DOM load

document.addEventListener('DOMContentLoaded', function(){
		blindAddTaskEvents();
		showTasks();
});