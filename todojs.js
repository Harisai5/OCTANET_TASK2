const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', function() {
  const newTaskText = newTaskInput.value;
  if (newTaskText) {
    // Create a new list item element
    const newListItem = document.createElement('li');
    newListItem.classList.add('todo-item');
    newListItem.textContent = newTaskText;

    // Add functionality to mark tasks complete
    newListItem.addEventListener('click', function() {
      newListItem.classList.toggle('completed');
    });

    todoList.appendChild(newListItem);
    newTaskInput.value = ''; // Clear input field
  }
});
