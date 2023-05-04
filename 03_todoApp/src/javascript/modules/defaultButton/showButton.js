const toggleDisplay = (state) => {
  document.querySelectorAll('.finished').forEach((item) => {
    switch (state) {
      case 'hide':
        item.classList.add('hide');
        break;
      case 'show':
        item.classList.remove('hide');
        break;
    }
  })
};

const showFinishedButton = document.querySelector('[data-js="showFinishedItemButton"]');

export const showButtonClickListener = () => {
  showFinishedButton.addEventListener('click', () => {
    showFinishedButton.checked ? toggleDisplay('show') : toggleDisplay('hide');
  });
}