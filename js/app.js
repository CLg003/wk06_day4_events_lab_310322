document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const titleInput = document.querySelector('#title');
  titleInput.addEventListener('input', handleTitleInput);

  const authorInput = document.querySelector('#author');
  authorInput.addEventListener('input', handleAuthorInput);

  const categorySelect = document.querySelector('#category');
  categorySelect.addEventListener('select', handleCategorySelect);
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  createListItem(event);
  event.target.reset();
}

const handleTitleInput = function(event) {
  const title = document.createElement('h3');
  title.classList.add('author');
  title.textContent = event.target.title.value;
  return title;
}

const handleAuthorInput = function(event) {
  const author = document.createElement('h4');
  author.textContent = event.target.author.value;
  return author;
}

const handleCategorySelect = function(event) {
  const category = document.createElement('p');
  category.textContent = event.target.category.value;
  return category;
}

const createListItem = function(event) {
  const newListItem = document.createElement('li');
  newListItem.classList.add('reading-list-item');
  newListItem.appendChild(handleTitleInput(event));
  newListItem.appendChild(handleAuthorInput(event));
  newListItem.appendChild(handleCategorySelect(event));
  const list = document.querySelector('ul'); 
  list.appendChild(newListItem);
}



