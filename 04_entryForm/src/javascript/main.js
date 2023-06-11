import { createSelectItem } from "./createSelectItem/createSelectItem.js";
import { checkStatus } from "./checkStatus/checkStatus.js";
import { toggleDetail } from "./button/toggleDetail.js";
import { clickButtons } from "./button/clickButtons.js";


// 画像に関わる処理とかがない限り、初期化処理は↓で書くのが基本
window.addEventListener('DOMContentLoaded', () => {
    createSelectItem();
    checkStatus();
    toggleDetail();
    clickButtons();
});