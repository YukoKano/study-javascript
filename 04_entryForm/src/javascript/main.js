import { createSelectItem } from "./createSelectItem/createSelectItem.js";
import { checkStatus } from "./checkStatus/checkStatus.js";
import { toggleDetail } from "./button/toggleDetail.js";
import { clickButtons } from "./button/clickButtons.js";

window.addEventListener('DOMContentLoaded', () => {
    createSelectItem();
    checkStatus();
    toggleDetail();
    clickButtons();
});