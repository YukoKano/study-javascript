export const toggleDisplay = (state) => {
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