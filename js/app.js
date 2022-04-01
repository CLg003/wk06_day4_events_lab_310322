document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  
  // Only this (commented out) event listener in solution:
  // const newItemForm = document.querySelector('#new-item-form');
  // newItemForm.addEventListener('submit', handleNewItemFormSubmit);
  
  const titleInput = document.querySelector('#title');
  titleInput.addEventListener('input', handleTitleInput);

  const authorInput = document.querySelector('#author');
  authorInput.addEventListener('input', handleAuthorInput);

  const categorySelect = document.querySelector('#category');
  categorySelect.addEventListener('select', handleCategorySelect);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  
// SOLUTION:
  // const readingListItem = createReadingListItem(event.target);
  // const readingList = document.querySelector('#reading-list');
  // readingList.appendChild(readingListItem);
  // event.target.reset();

  createListItem(event);
  event.target.reset();
}

// From here to end one function in solution
const handleTitleInput = function(event) {
  const title = document.createElement('h3');
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
  newListItem.appendChild(handleTitleInput(event));
  newListItem.appendChild(handleAuthorInput(event));
  newListItem.appendChild(handleCategorySelect(event));
  const list = document.querySelector('ul'); 
  list.appendChild(newListItem);
}
// Single function in solution finishes here



