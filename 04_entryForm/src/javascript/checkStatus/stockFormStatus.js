export let stockFormStatus = {};

export const resetFormStatus = (name, fieldset) => {
  const fields = document.querySelectorAll(`fieldset[name="${name}"] [data-js$="${fieldset}"][required]`);
  fields.forEach((item) => {
    stockFormStatus[item.name] = false;
  })
}

resetFormStatus("carInformation", "SelectMenu");