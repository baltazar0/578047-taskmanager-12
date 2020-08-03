const TASK_COUNT = 3;

import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createBoardContainerTemplate} from "./view/board.js";
import {createBoardTasksTemplate} from "./view/board-tasks.js";
import {createSortTemplate} from "./view/sort.js";
import {createTaskEditTemplate} from "./view/task-edit.js";
import {createTaskTemplate} from "./view/task.js";
import {createLoadMoreButtonTemplate} from "./view/load-more-button.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardContainerTemplate(), `beforeend`);

const siteBoardElement = siteMainElement.querySelector(`.board`);

render(siteBoardElement, createSortTemplate(), `beforeend`);
render(siteBoardElement, createBoardTasksTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(siteBoardElement, createLoadMoreButtonTemplate(), `beforeend`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}
