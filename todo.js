import { createTodo, displayTodos } from './function.js';

//создаём контейнер для будущих todo 
const todos = document.createElement('div');
todos.classList.add("todos");
document.body.querySelector(".create-todo").after(todos);

//если есть уже задачи, то нужно их показать
if (Object.keys(window.todos)) {
   //вызываем функцию добавления todo
   displayTodos(todos);
}

//обрабатываем добавление todo
document.body.querySelector('.create-button').addEventListener("click", () => {
   const textarea = document.querySelector(".description");
   const description = textarea.value.trim();

   //проверяем на ввод пустую строку
   if (description === '') {
      return;
   }

   //переменная для dataset и для номера объекта
   const id = Object.keys(window.todos).length + 1;

   //добавляем в объект новое значение
   Object.assign(window.todos, {
      [id]: {
         id,
         value: description,
         isVisible: true
      }
   });

   //удаляем старый ввод 
   textarea.value = '';

   //вызываем функцию добавления todo
   createTodo({ todos, description, id });
});


//добавление механизма удаления
document.body.addEventListener("click", (event) => {
   const deleteButton = event.target.closest('.delete-button');
   if (!deleteButton) {
      return;
   }
   //достаём значение data-id
   const todo = deleteButton.parentElement.querySelector('.todo');
   const id = todo.getAttribute('data-id');

   //меняем значение isVisible на false
   window.todos[id].isVisible = false;

   //удаляем элемент DOM
   deleteButton.parentElement.remove();

});

