function addTask() {
  var TaskInput = document.getElementById("task");
  var TaskValue = TaskInput.value;
  if (TaskValue === "") {
    window.alert("ENTER TASK!");
  } else {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    var textNode = document.createTextNode(TaskValue);
    li.appendChild(textNode);

    var ul = document.getElementById("list");
    ul.appendChild(li);

    TaskInput.value = "";
  }
}
