import { createMakerSelectItem } from "./createSelectItem/createMakerSelectItem.js";
import { createCarSelectItem } from "./createSelectItem/createCarSelectItem.js";
import { createYearSelectItem } from "./createSelectItem/createYearSelectItem.js";
import { createCarGradeSelectItem } from "./createSelectItem/createCarGradeSelectItem.js";
import { createCarColorSelectItem } from "./createSelectItem/createCarColorSelectItem.js"
import { createMileageSelectItem } from "./createSelectItem/createMileageSelectItem.js";
import { toggleDetail } from "./toggleDetail.js";

import { checkMakerFormStatus } from "./checkStatus/checkMakerFormStatus.js";
import { checkCarNameFormStatus } from "./checkStatus/checkCarNameFormStatus.js";
import { checkModelYearFormStatus } from "./checkStatus/checkModelYearFormStatus.js";
import { checkMileageFormStatus } from "./checkStatus/checkMileageFormStatus.js";
import { clickNextButton } from "./button/clickNextButton.js";
import { checkCustomerNameFormStatus } from "./checkStatus/checkCustomerNameFormStatus.js";
import { checkCustomerPostcodeFormStatus } from "./checkStatus/checkCustomerPostcodeFormStatus.js";
import { checkCustomerEmailFormStatus } from "./checkStatus/checkCustomerEmailFormStatus.js";
import { checkCustomerTelFormStatus } from "./checkStatus/checkCustomerTelFormStatus.js";
import { checkCampaignFormStatus } from "./checkStatus/checkCampaignFormStatus.js";
import { clickConfirmButton } from "./button/clickConfirmButton.js";
import { checkModelFormStatus } from "./checkStatus/checkModelFormStatus.js";
import { checkColorFormStatus } from "./checkStatus/checkColorFormStatus.js";

// 画像に関わる処理とかがない限り、初期化処理は↓で書くのが基本
window.addEventListener('DOMContentLoaded', () => {
    createMakerSelectItem();
    createCarSelectItem();
    createYearSelectItem();
    createCarGradeSelectItem();
    createCarColorSelectItem();
    createMileageSelectItem();

    toggleDetail();

    checkMakerFormStatus();
    checkCarNameFormStatus();
    checkModelYearFormStatus();
    checkMileageFormStatus();

    checkModelFormStatus();
    checkColorFormStatus();

    clickNextButton();

    checkCustomerNameFormStatus();
    checkCustomerPostcodeFormStatus();
    checkCustomerEmailFormStatus();
    checkCustomerTelFormStatus();
    checkCampaignFormStatus();

    clickConfirmButton();
});