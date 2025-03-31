// selectors
const form = document.querySelector(".input-field");
const input = document.querySelector("#taskInput");
const taskList = document.querySelector(".task-list");

// функция добавление новой задачи
function addTask(event) {
  //
  event.preventDefault();

  if (!input.value.trim()) return;
  const inputValue = input.value;
  console.log(inputValue, "123231");

  const listItem = document.createElement("li");
  listItem.classList.add("task");

  const taskDiv = document.createElement("div");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  const taskName = document.createElement("span");
  taskName.innerText = inputValue;

  const deleteButton = document.createElement("button");

  taskDiv.classList.add("task-info");

  deleteButton.classList.add("delete");
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;

  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(taskName);
  listItem.appendChild(taskDiv);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);

  input.value = "";
}

// event listener

form.addEventListener("submit", addTask);
taskList.addEventListener("click", taskModify);

// функция обработки событий  удаление/редактирование
function taskModify(event) {
  const clickElem = event.target;
  console.log(clickElem.classList, "click");

  // удаление таски
  if (clickElem.classList.contains("fa-trash")) {
    const task = clickElem.closest("li");
    console.log(task, "task");

    task.remove();
  }
  //отметка выполнения задачи
  if (clickElem.type === "checkbox") {
    clickElem.closest("li").classList.toggle("done");
  }

  // редактирование

  clickElem.addEventListener("click", () => {
    if (!clickElem.querySelector("input")) {
      const oldValue = clickElem.textContent;

      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.className = "edit-input";
      editInput.value = oldValue;

      clickElem.appendChild(editInput);

      editInput.focus();

      editInput.addEventListener("blur", () => {
        const newValue = editInput.value || oldValue;
        clickElem.textContent = newValue;
      });
    }
  });
}
