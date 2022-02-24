'use strict';

const body = document.body;

const btnToggleTheme = document.querySelector('.btn--toggle');

const form = document.querySelector('.form');
const formCheckBoxEl = form.querySelector('.form__check-box');
const inputBoxEl = form.querySelector('.form__text-box');

const todoContainer = document.querySelector('.todo-list');

const todoActionEl = document.querySelector('.todo-action');
const todoSortEl = document.querySelector('.todo-sort');
const todoItemsLeft = todoActionEl.querySelector('.todo-items-left');

const btnClear = document.querySelector('.btn--clear');
let theme = document.getElementById('theme-mode');

const todo = [];

let themeMode = `${
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark-mode'
    : 'light-mode'
}`;

// ─── FUNCTION ROW ───────────────────────────────────────────────────────────────
//

function toggleClass(parentElement, el, className) {
  //remove active class from children element
  [...parentElement.children].forEach(btn => btn.classList.remove(className));
  //add the active class to the clicked button
  el.classList.add(className);
}
// returns the number of items left in todo
function itemsLeft() {
  return todo.filter(item => !item.done).length;
}

/**
 * Renders the given HTML into the given parent element.
 * @param {string} html - the HTML to render
 * @param {HTMLElement} [parentElement=todo] - the parent element to render the HTML into
 * @returns None
 */

function render(html, parentElement = todo) {
  parentElement.innerHTML = html;

  const checkboxes = todoContainer.querySelectorAll('.form__check-box');
  // console.log(checkboxes);

  checkboxes.forEach(
    checkbox =>
      checkbox.checked &&
      checkbox.nextElementSibling.classList.add('line-through')
  );
  todoItemsLeft.textContent = `${itemsLeft()} items left`;
}

/**
 * Takes in an array of todo items and returns a string of HTML that can be injected into the page.
 * @param {TodoItem[]} array - the array of todo items.
 * @returns {string} - the string of HTML that can be injected into the page.
 */
function getHTML(array = todo) {
  return array
    .map(
      (item, index) => `
  <li class="todo-items" data-index= '${index}'>
    <input type="checkbox" class="form__check-box" ${
      item.done ? 'checked' : ''
    } />
    <p>${item.task}</p>
    <button class="btn btn--delete">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </button>
  </li>
  
`
    )
    .join('');
}

window.addEventListener('load', function () {
  theme.href = `css/${themeMode}.css`;
});

btnToggleTheme.addEventListener('click', function () {
  themeMode = `${themeMode === 'dark-mode' ? 'light-mode' : 'dark-mode'}`;
  console.log(themeMode);
  theme.href = `css/${themeMode}.css`;
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  todo.push({ task: inputBoxEl.value, done: formCheckBoxEl.checked });
  // console.log(todo);

  inputBoxEl.value = '';
  formCheckBoxEl.checked = false;
  // const html = getHTML(todo);
  // render(html, todoContainer);

  const [btnActive] = [...todoSortEl.querySelectorAll('button')].filter(btn =>
    btn.classList.contains('active')
  );

  console.log(btnActive);
  if (btnActive.classList.contains('todo-sort__all')) {
    console.log(todo);
    render(getHTML(todo), todoContainer);
  }
  if (btnActive.classList.contains('todo-sort__active')) {
    const completed = todo.filter(item => !item.done);
    console.log(completed);
    render(getHTML(completed), todoContainer);
  }
  if (btnActive.classList.contains('todo-sort__complete')) {
    const uncompleted = todo.filter(item => item.done);
    console.log(uncompleted);
    render(getHTML(uncompleted), todoContainer);
  }
});

todoContainer.addEventListener('click', function (e) {
  const checkbox = e.target.closest('.form__check-box');
  if (checkbox) {
    // e.target.closest('li')
    // checkbox.checked = !checkbox.check;
    checkbox.nextElementSibling.classList.toggle('line-through');
    // console.log(e.target.closest('li'));
    const index = +e.target.closest('li').dataset.index;
    console.log(index);

    todo[index].done = !todo[index].done;
    console.log(todo[index].done);
  }

  const btnDelete = e.target.closest('.btn--delete');
  if (btnDelete) {
    const index = +btnDelete.parentNode.dataset.index;
    // console.log(index);
    console.log(btnDelete.parentNode);
    todo.splice(index, 1);

    getHTML(todo);

    render(getHTML(todo), todoContainer);
  }
});

todoSortEl.addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.closest('.btn--sort')) return;

  if (e.target.closest('.todo-sort__all')) {
    console.log(todo);
    render(getHTML(todo), todoContainer);
  }
  if (e.target.closest('.todo-sort__active')) {
    const completed = todo.filter(item => !item.done);
    console.log(completed);
    render(getHTML(completed), todoContainer);
  }
  if (e.target.closest('.todo-sort__complete')) {
    const uncompleted = todo.filter(item => item.done);
    console.log(uncompleted);
    render(getHTML(uncompleted), todoContainer);
  }
  toggleClass(this, e.target, 'active');
});

btnClear.addEventListener('click', function (e) {
  e.preventDefault();
  const newTodo = todo.filter(item => !item.done);
  todo.splice(0, todo.length);
  todo.push(...newTodo);
  render(getHTML(todo), todoContainer);
});
