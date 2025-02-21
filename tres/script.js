document.getElementById('add-task-btn').addEventListener('click', function() {
    const newTask = document.createElement('li');
    newTask.innerHTML = 'Nueva tarea <button class="delete-btn">Eliminar</button>';
    document.getElementById('task-list').appendChild(newTask);
});

document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', function(event) {
        event.target.parentElement.remove();
    });
});
