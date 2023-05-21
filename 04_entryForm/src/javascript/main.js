import { createMakerSelectItem } from "./createMakerSelectItem.js";
import { createCarSelectItem } from "./createCarSelectItem.js";
import { createYearSelectItem } from "./createYearSelectItem.js";
import { createMileageSelectItem } from "./createMileageSelectItem.js";

// 画像に関わる処理とかがない限り、初期化処理は↓で書くのが基本
window.addEventListener('DOMContentLoaded', () => {
    createMakerSelectItem();
    createCarSelectItem();
    createYearSelectItem();
    createMileageSelectItem();
});