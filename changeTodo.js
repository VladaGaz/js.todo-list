
import { closeButton, addSaveBackButton, addButton, displayTodos } from './function.js';

//добавляю кнопку создания, к ней необходимо будет обращаться
const create = document.querySelector('.create-todo');

//добавление кнопки назад
const back = document.createElement('button');
back.classList.add("back-button");
create.before(back);
//добавление знака назад
const imgBack = document.createElement('img');
imgBack.src = 'назад.png';
imgBack.classList.add("image");
back.append(imgBack);
//скроем кнопку до момента редактирования todo
closeButton(back);

//добавление кнопки сохранения
const save = document.createElement('button');
save.classList.add("save-button");
//добавление знака сохранения
const imgSave = document.createElement('img');
imgSave.src = 'сохранить.png';
imgSave.classList.add("image");
save.append(imgSave);

//контейнер, где все наши todo
const todos = document.querySelector('.todos');

//если клик на todo
document.body.addEventListener("click", (event) => {
   const todo = event.target.closest('.todo');

   if (!todo) {
      return;
   }

   //создаю новый контейнер для кнопки и todo
   const fieldChange = document.createElement('div');
   fieldChange.classList.add("field-change");

   //изменяю прошлый div на textarea
   const textarea = document.createElement('textarea');
   textarea.classList.add("todo-change");
   textarea.innerHTML = todo.textContent;
   fieldChange.prepend(textarea);

   //добавляю значение data-id
   const counter = todo.getAttribute('data-id')
   textarea.setAttribute('data-id', counter);

   //удаляю все todo
   todos.innerHTML = '';

   //вставляю нашу todo
   todos.prepend(fieldChange);

   //скрытие create
   closeButton(create);

   //добавление кнопки назад
   addSaveBackButton(back);

   //добавление кнопки сохранения
   addSaveBackButton(save);
   textarea.after(save);
});


//добавление механизма сохранения
document.body.addEventListener("click", (event) => {
   const saveButton = event.target.closest('.save-button');
   if (!saveButton) {
      return;
   }
   //нужно понять какой элемент мы открыли
   const todo = saveButton.parentElement.querySelector(".todo-change");
   const id = todo.getAttribute('data-id');

   //изменяем значение 
   window.todos[id].value = todo.value;
});


//добавление механизма кнопки назад
document.body.addEventListener("click", (event) => {
   const backButton = event.target.closest('.back-button');
   if (!backButton) {
      return;
   }
   // заново выводим массив
   displayTodos(todos);

   //скрытие назад
   closeButton(back);

   //возвращение create
   addButton(create);

   //убрать кнопку сохранения
   closeButton(save);

   //убрать div, в котором были изменения
   document.body.querySelector('.field-change').remove();

});








