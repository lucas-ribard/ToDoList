<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap" rel="stylesheet">
    <link href="index.css" rel="stylesheet" type="text/css" />
    <script async src="script.js"></script>
    <title>To-Do List</title>
</head>

<body>
    <div class="main">
        <p>

            <label for="new-task">Add a Task</label>
            <input id="new-task" type="text">
            <button>Add</button>
        </p>

        <h3>Todo</h3>
        <ul id="incomplete-tasks">
            <!-- /////// EXEMPLE DE TACHE //// -->
<!--
            <li>
                <input type="checkbox" class="checkbox">
                <label>Get some milk</label>
                <input type="text">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <date>16:30 01/06/2020</date>
                <br><br>
                <hr>
            </li>
-->
         

        </ul>
        
        <br>
        <hr id="separation">

        <h3>Completed</h3>
        <ul id="completed-tasks">
            <!-- /////// EXEMPLE DE TACHE //// -->

        </ul>
    </div>

</body>

</html>