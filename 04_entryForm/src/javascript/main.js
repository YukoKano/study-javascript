import { createMakerSelectItem } from "./createMakerSelectItem.js";
import { createCarSelectItem } from "./createCarSelectItem.js";
import { createYearSelectItem } from "./createYearSelectItem.js";
import { createMileageSelectItem } from "./createMileageSelectItem.js";
import { toggleDetail } from "./toggleDetail.js";
import { createCarGradeSelectItem } from "./createCarGradeSelectItem.js";
import { toggleRequiedText } from "./toggleRequiedText.js";
import { step1ButtonAction } from "./step1ButtonAction.js";
import { step2ConfirmButtonAction } from "./step2ConfirmButtonAction.js";

// 画像に関わる処理とかがない限り、初期化処理は↓で書くのが基本
window.addEventListener('DOMContentLoaded', () => {
    createMakerSelectItem();
    createCarSelectItem();
    createYearSelectItem();
    createMileageSelectItem();

    toggleDetail();
    createCarGradeSelectItem();
    toggleRequiedText();

    step1ButtonAction();

    step2ConfirmButtonAction();
});