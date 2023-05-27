import { createMakerSelectItem } from "./createMakerSelectItem.js";
import { createCarSelectItem } from "./createCarSelectItem.js";
import { createYearSelectItem } from "./createYearSelectItem.js";
import { createMileageSelectItem } from "./createMileageSelectItem.js";
import { toggleDetail } from "./toggleDetail.js";
import { createCarGradeSelectItem } from "./createCarGradeSelectItem.js";
import { toggleRequiredText } from "./toggleRequiredText.js";
import { step1ButtonAction } from "./step1ButtonAction.js";
import { step2ConfirmButtonAction } from "./step2ConfirmButtonAction.js";
import { createCarColorSelectItem } from "./createCarColorSelectItem.js"

// 画像に関わる処理とかがない限り、初期化処理は↓で書くのが基本
window.addEventListener('DOMContentLoaded', () => {
    createMakerSelectItem();
    createCarSelectItem();
    createYearSelectItem();
    createCarColorSelectItem();
    createMileageSelectItem();

    toggleDetail();
    createCarGradeSelectItem();
    toggleRequiredText();

    step1ButtonAction();
    step2ConfirmButtonAction();
});