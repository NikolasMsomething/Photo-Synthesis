import { correct } from "./chalkColors.js";

export const logIdWithTitle = (id, title) => {
  console.log(correct(`[${id}] ${title}`));
}
