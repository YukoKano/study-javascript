import { createMakerSelectItem } from "./createMakerSelectItem.js";
import { createCarSelectItem } from "./createCarSelectItem.js";
import { createYearSelectItem } from "./createYearSelectItem.js";
import { createCarGradeSelectItem } from "./createCarGradeSelectItem.js";
import { createCarColorSelectItem } from "./createCarColorSelectItem.js"
import { createMileageSelectItem } from "./createMileageSelectItem.js";

export const createSelectItem = () => {
  createMakerSelectItem();
  createCarSelectItem();
  createYearSelectItem();
  createCarGradeSelectItem();
  createCarColorSelectItem();
  createMileageSelectItem();
}