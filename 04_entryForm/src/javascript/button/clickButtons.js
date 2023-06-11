import { clickNextButton } from "./clickNextButton.js";
import { clickInputChange } from "./clickInputChangeButton.js";
import { clickSubmitButton } from "./clickSubmitButton.js";
import { clickConfirmButton } from "./clickConfirmButton.js";

export const clickButtons = () => {
  clickNextButton();
  clickConfirmButton();
  clickInputChange();
  clickSubmitButton();
}