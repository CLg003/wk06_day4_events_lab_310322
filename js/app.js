document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAllClick);
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  createListItem(event.target);
  event.target.reset();
}

const createListItem = function(form) {
  const newListItem = document.createElement('li');
  newListItem.classList.add('reading-list-item');

  const title = document.createElement('h3');
  title.textContent = form.title.value;
  newListItem.appendChild(title);

  const author = document.createElement('h4');
  author.textContent = form.author.value;
  newListItem.appendChild(author);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  newListItem.appendChild(category);

  const list = document.querySelector('ul'); 
  list.appendChild(newListItem);
}

const handleDeleteAllClick = function (event) {
  readingList = document.querySelector('#reading-list');
  readingList.textContent = '';
}



// (Book details event listeners replaced with single form 'submit' event)
  // const titleInput = document.querySelector('#new-item-form');
  // titleInput.addEventListener('submit', handleTitleInput);

  // const authorInput = document.querySelector('#new-item-form');
  // authorInput.addEventListener('submit', handleAuthorInput);

  // const categorySelect = document.querySelector('#new-item-form');
  // categorySelect.addEventListener('submit', handleCategorySelect);


// Original functions for handling book details:
// const handleTitleInput = function(form) {
//   const title = document.createElement('h3');
//   title.textContent = form.title.value;
//   newListItem.appendChild(title);
// }

// const handleAuthorInput = function(form) {
//   const author = document.createElement('h4');
//   author.textContent = form.author.value;
//   newListItem.appendChild(author);
// }

// const handleCategorySelect = function(form) {
//   const category = document.createElement('p');
//   category.textContent = form.category.value;
//   newListItem.appendChild(category);
// }