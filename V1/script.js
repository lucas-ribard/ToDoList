// les différentes divs,
var NewTask = document.getElementById("new-task");//Add a new task.
var ButtonAdd = document.getElementsByTagName("button")[0];//Add button
var incompleteTask = document.getElementById("incomplete-tasks");
var completeTask = document.getElementById("completed-tasks");


//nouvelle task 
function createNewTaskElement(task) {
    console.log("Construction de l'élément :");

    //si task n'est pas vide 
    if (task) {
        var TaskElement = document.createElement("li");//nouvel élément de liste

        var checkBox = document.createElement("input");//input checkbox
        checkBox.type = "checkbox";//passe l'input en type checkbox
        checkBox.className = "checkbox";

        var label = document.createElement("label");//nom de la tache
        label.innerText = task; //ecrit la tache dans <label>

        var editInput = document.createElement("input");//zone de text d'edit
        editInput.type = "text";

        var editButton = document.createElement("button");//bt edit
        editButton.innerText = "Edit";//innerText encodes special characters, HTML does not.
        editButton.className = "edit";

        var deleteButton = document.createElement("button");//bt suppr
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";

        var br1 = document.createElement('br');
        var br2 = document.createElement('br');
        var Ligne = document.createElement('hr');

        let DateHour = runClock();
        let Date = document.createElement("date");
        Date.innerText = DateHour;

        //crée l'élément et le retourne
        //<li><input type="checkbox"><label>TASK</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>
        TaskElement.appendChild(checkBox);
        TaskElement.appendChild(label);
        TaskElement.appendChild(editInput);
        TaskElement.appendChild(editButton);
        TaskElement.appendChild(deleteButton);
        TaskElement.appendChild(Date);
        TaskElement.appendChild(br1);
        TaskElement.appendChild(br2);
        TaskElement.appendChild(Ligne);

        console.log(TaskElement);
        return TaskElement;
    }
}

function runClock() {
    let today = new Date();
    let timeValue = today.getHours();
    let minutes = today.getMinutes();
    let dateValue = today.toLocaleDateString();

    // Si le nombre de minutes est inférieur à 10, alors on ajoute un 0 devant sinon ca donne (10h2 plutot que 10h02)
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    DateHour = timeValue;
    DateHour += " ";
    DateHour += dateValue;
    return DateHour;
}

//crée la nouvelle tache a partir de l'élément crée
function NouvelleTask() {
    console.log("Nouvelle Tache");

    var TaskElement = createNewTaskElement(NewTask.value);

    //insere l'élément dans la liste des tache incompletes
    incompleteTask.appendChild(TaskElement);
    bindTaskEvents(TaskElement, taskCompleted);

    NewTask.value = "";
    console.log("Tache :", TaskElement.querySelector("label").innerText, "crée");
}
//Quand le bouton Add est cliqué, il active la fonction NouvelleTask
ButtonAdd.onclick = NouvelleTask;


//supprimer une tache.
function deleteTask() {
    console.log("Delete Task : ", this.parentNode.querySelector("label").innerText);
    //Remove the parent list item from the ul.
    this.parentNode.parentNode.removeChild(this.parentNode);

}

//Editer une tache
function editTask() {
    console.log("Edit Task :", this.parentNode.querySelector("label").innerText);

    //si la classe est .editmode
    if (this.parentNode.classList.contains("editMode")) {
        //switch to .editmode
        //label devient l'input.
        this.parentNode.querySelector("label").innerText = this.parentNode.querySelector('input[type=text]').value;

    } else {
        //sinon l'input devient le label
        this.parentNode.querySelector('input[type=text]').value = this.parentNode.querySelector("label").innerText;
    }

    //toggle .editmode sur le parent parent.
    this.parentNode.classList.toggle("editMode");

    if (this.parentNode.querySelector("button").innerText == "Edit") {
        this.parentNode.querySelector("button").innerText = "Save";
    } else {
        this.parentNode.querySelector("button").innerText = "Edit"
    }
}


//marque la tache comme complete
function taskCompleted() {
    console.log("Task", this.parentNode.querySelector("label").innerText, "is now Completed");

    let DateHour = runClock();
    this.parentNode.querySelector("date").innerText = DateHour;

    //Append task list item to  completed-tasks
    completeTask.appendChild(this.parentNode);
    bindTaskEvents(this.parentNode, taskIncomplete);

}

//marque la tache comme incomplete
function taskIncomplete() {
    console.log("Task", this.parentNode.querySelector("label").innerText, "is now unfinished");
    //marque la tache comme étant incomplete quand la checkbox est decoché
    incompleteTask.appendChild(this.parentNode);
    bindTaskEvents(this.parentNode, taskCompleted);
}



function bindTaskEvents(taskListItem, checkBoxEventHandler) {
    //console.log("bind evenements");

    //Bind editTask a bouton edit
    taskListItem.querySelector("button.edit").onclick = editTask;
    //Bind deleteTask a bouton delete
    taskListItem.querySelector("button.delete").onclick = deleteTask;
    //Bind taskCompleted à checkBoxEventHandler
    taskListItem.querySelector("input[type=checkbox]").onchange = checkBoxEventHandler;
}

//cycle over incompleteTask

//for each list item
for (var i = 0; i < incompleteTask.children.length; i++) {
    //bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTask.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for (var i = 0; i < completeTask.children.length; i++) {
    //bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completeTask.children[i], taskIncomplete);
}


