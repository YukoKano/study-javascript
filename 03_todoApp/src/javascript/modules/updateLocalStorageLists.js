export const updateLocalStorageLists = (lists) => {
  const updatedListsJson = JSON.stringify(lists);
  localStorage.setItem('todoLists', updatedListsJson);
}