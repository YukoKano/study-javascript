export const loadListsArray = () => {
  const array = localStorage.hasOwnProperty('todoLists')
    ? JSON.parse(localStorage.getItem('todoLists'))
    : []
  return array;
}