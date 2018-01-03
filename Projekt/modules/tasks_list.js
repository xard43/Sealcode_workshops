//show task
function showTasks()
{
	tasksBoard.forEach(function(title){
		addNewTask(title);
	});
}
//toggle complete
function toggleTaskComplete(task)
{
	task.classList.toggle('taskDone');
}

//delete task
function deleteTask(task)
{
	
	var taskToDelete = task.closest('div');
	
	task.closest('ul').removeChild(taskToDelete);
}