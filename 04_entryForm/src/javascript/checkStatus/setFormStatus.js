import { stockFormStatus } from "./stockFormStatus.js";

export const setFormStatus = (name, status) => {
  stockFormStatus[name] = status;
  // console.log(stockFormStatus);
}