export const loadLocalStorageLists = () => {
  const array = localStorage.hasOwnProperty('todoLists')
    ? JSON.parse(localStorage.getItem('todoLists'))
    : []
  return array;
}