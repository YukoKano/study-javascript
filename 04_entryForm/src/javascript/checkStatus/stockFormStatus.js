export let stockFormStatus = {};

const resetFormStatus = (name) => {
  const fields = document.querySelectorAll(`fieldset[name="${name}"] [data-js$="SelectMenu"][required]`);
  fields.forEach((item) => {
    stockFormStatus[item.id] = false;
  })
}

resetFormStatus("carInformation");