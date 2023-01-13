import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

// arrow fnuction o funciones anonimas
btn.addEventListener("click", addTask);
displayTasks();
