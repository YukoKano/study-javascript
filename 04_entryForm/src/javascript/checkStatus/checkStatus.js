import { checkMakerFormStatus } from "./checkMakerFormStatus.js";
import { checkCarNameFormStatus } from "./checkCarNameFormStatus.js";
import { checkModelYearFormStatus } from "./checkModelYearFormStatus.js";
import { checkMileageFormStatus } from "./checkMileageFormStatus.js";

import { checkCustomerNameFormStatus } from "./checkCustomerNameFormStatus.js";
import { checkCustomerPostcodeFormStatus } from "./checkCustomerPostcodeFormStatus.js";
import { checkCustomerEmailFormStatus } from "./checkCustomerEmailFormStatus.js";
import { checkCustomerTelFormStatus } from "./checkCustomerTelFormStatus.js";
import { checkCampaignFormStatus } from "./checkCampaignFormStatus.js";
import { checkModelFormStatus } from "./checkModelFormStatus.js";
import { checkColorFormStatus } from "./checkColorFormStatus.js";

export const checkStatus = () => {
  checkMakerFormStatus();
  checkCarNameFormStatus();
  checkModelYearFormStatus();
  checkMileageFormStatus();

  checkModelFormStatus();
  checkColorFormStatus();

  checkCustomerNameFormStatus();
  checkCustomerPostcodeFormStatus();
  checkCustomerEmailFormStatus();
  checkCustomerTelFormStatus();
  checkCampaignFormStatus();
}