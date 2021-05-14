
export const createTodo = ({ todos, description, id }) => {

   //контейнер, где хранится задача и кнопка удалить
   const field = document.createElement('div');
   field.classList.add("field");
   todos.prepend(field);

   //где хранится todo 
   const todo = document.createElement('div');
   todo.classList.add("todo");
   todo.innerHTML = description;
   todo.setAttribute('data-id', id);
   field.prepend(todo);

   //добавление кнопки удаления
   const remove = document.createElement('button');
   remove.classList.add("delete-button");
   todo.after(remove);

   //добавление знака удаления
   const imgDelete = document.createElement('img');
   imgDelete.classList.add("image");
   imgDelete.src = 'удалить.png';
   remove.append(imgDelete);

}

//функция для закрытия кнопок back,save,createTodo
export const closeButton = (button) => {
   button.classList.add("hidden");
};

export const addButton = (button) => {
   button.classList.remove("hidden");
};

export const addSaveBackButton = (button) => {
   button.classList.remove("hidden");
   button.firstElementChild.style.display = "";
};

export const displayTodos = (todos) => {
   // заново выводим массив
   for (let key in window.todos) {
      if (window.todos[key].isVisible !== false) {
         const description = window.todos[key].value;
         createTodo({ todos, description, id: key });
      }
   }
};