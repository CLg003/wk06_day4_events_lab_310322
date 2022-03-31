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

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  // const readingListItem = createReadingListItem(event.target);
  // const readingList = document.querySelector('#reading-list');
  // readingList.appendChild(readingListItem);
  // event.target.reset();

  createListItem(event);
  document.form('#new-item-form').reset();
}

  // From here to end one function in solution
const handleTitleInput = function(event) {
  const title = event.target.value;
  return title;
}

const handleAuthorInput = function(event) {
  const author = event.target.value;
  return author;
}

const handleCategorySelect = function(event) {
  const category = event.target.value;
  return category;
}

const createBook = function(event) {
  title = handleTitleInput(event);
  author = handleAuthorInput(event);
  category = handleCategorySelect(event);
  const book = `${title} by ${author} (${category})`;
  return book;
}

const createListItem = function(event) {
  const newListItem = document.createElement('li');
  newListItem.textContent = createBook(event);
  const list = document.querySelector('ul'); 
  list.appendChild(newListItem);
}
// Single function in solution finishes here

// const listItems = document.querySelector('ul');
// console.log(listItems);



