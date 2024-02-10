var taskIdCounter = 0;

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Lütfen Görev Giriniz!');
        return;
    }

    var taskId = ++taskIdCounter;
    var li = document.createElement('li');
    var date = new Date();
    var time = date.toLocaleString();

    li.textContent = taskId + "-) " + taskInput.value;
    var taskTimeText = 'Görevin Eklenme Zamanı: ' + time;
    var timeSpan = document.createElement('span');
    timeSpan.textContent = taskTimeText;
    li.appendChild(timeSpan);

    var editButton = document.createElement('button');
    editButton.textContent = 'Düzenle';
    editButton.className = 'edit';
    editButton.onclick = function() {
        var newText = prompt('Yeni görevi giriniz:');
        if (newText !== null && newText !== '') {
            li.textContent = taskId + "-) " + newText;
            li.appendChild(timeSpan);
            li.appendChild(editButton);
            li.appendChild(completeButton);
            li.appendChild(deleteButton);
        }
    };

    var completeButton = document.createElement('button');
    completeButton.textContent = 'Tamamlandı';
    completeButton.className = 'complete';
    completeButton.onclick = function() {
        li.classList.toggle('completed');
    };

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Sil';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(editButton);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
    updateClearAllButton();
}

function clearAllTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskIdCounter = 0;
    
    var clearAllButton = document.getElementById('clearAllButton');
    if (clearAllButton) {
        clearAllButton.remove();
    }
}

function updateClearAllButton() {
    var clearAllButton = document.getElementById('clearAllButton');
    var taskList = document.getElementById('taskList');

    if (taskList.children.length > 0) {
        if (!clearAllButton) {
            clearAllButton = document.createElement('button');
            clearAllButton.textContent = 'Tümünü Sil';
            clearAllButton.id = 'clearAllButton';
            clearAllButton.className = 'clearAllButton';
            clearAllButton.onclick = clearAllTasks;

            var container = document.querySelector('.container');
            container.appendChild(clearAllButton);
        }
    } else {
        if (clearAllButton) {
            clearAllButton.remove();
        }
    }
}
