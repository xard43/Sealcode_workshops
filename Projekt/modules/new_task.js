function addNewTask(title){
	var task = document.createElement('span');
	task.innerHTML = prepareTaskHTML(title);
	
	// Events - dodanie i usuniecie 
	var toggleComplete = task.querySelector('input[name="done"]');
	var toggleDelete = task.querySelector('.delete');
	var taskChange = task.querySelector('span[name="taskChange"]');
	
	
	toggleComplete.addEventListener('click', function(){
		toggleTaskComplete(taskChange);
	});
	
	toggleDelete.addEventListener('click', function() {
		deleteTask(taskChange);
	});
	// Add task to DOM
	tasksContainer.appendChild(task);
}
//Html for one task
function prepareTaskHTML(title){
	 return '<ul><div> <button type="reset" class="delete">Usuń</button>'+
     '<input type="checkbox" name="done" /> '+
	 '<span name="taskChange" class="taskToDo">'+' '+title+'</span>'+
      '<br /> </div></ul>'
}

// Add new task events
function blindAddTaskEvents(){
	
	//on submit
	addNewTaskForm.addEventListener('click', function(){
		var title = document.querySelector('input[name="task"]').value;
		
		if(title)
		{
			
			addNewTask(title);
		}
	});
	
}