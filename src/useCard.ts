import { CardData, User } from "./types";
import { getCircleSvg } from "./useCircleProgress";

interface ReplaceDataItem {
  value: keyof CardData;
  element: Element | null;
}

const qs = (selector: string) => document.querySelector(selector);
// <div class="listItem  listItem--finished">
// <span class="listItem__position">1</span>
// <span class="listItem__name">Lorem, ipsum.</span>
// <span class="listItem__timeLeft">105m</span>
// <span class="listItem__icon">active</span>
// </div>

function createListRow(userData: User) {
  const listItem = document.createElement("div");
  listItem.classList.add("listItem");
  listItem.classList.add(`listItem--${userData.status}`);
  if (userData?.isCurrentUser) {
    listItem.classList.add(`listItem--selected`);
  }

  const position = document.createElement("span");
  position.classList.add("listItem__position");
  position.innerText = `${userData.position}`;

  const name = document.createElement("span");
  name.classList.add("listItem__name");
  name.innerText = `${userData.name}`;

  const time = document.createElement("span");
  time.classList.add("listItem__time");
  time.innerText = `${userData.time}`;

  const icon = document.createElement("span");
  icon.classList.add("listItem__icon");
  icon.classList.add(`listItem__icon--${userData.status}`);

  listItem.append(...[position, name, time, icon]);

  return listItem;
}

function createUserList(list: User[]) {
  const listElement = document.querySelector(".leaderboard__userlist");

  if (!listElement) {
    return;
  }

  listElement.innerHTML = "";

  list.forEach((item) => {
    listElement.append(createListRow(item));
  });
}

function showProgressGraph(data: CardData) {
  const graphContainer = qs(".progress__circleGraph");
  const svg = getCircleSvg(data.currentTime, data.timeLimit);

  if (graphContainer) {
    graphContainer.innerHTML = svg;
  }
}
export function changeCardData(data: CardData) {
  const dataToReplace: ReplaceDataItem[] = [
    { value: "timeLeft", element: qs(".progress__minutesLeft > strong") },
    { value: "timeLimit", element: qs(".progress__timeLimit") },
    { value: "currentTime", element: qs(".progress__currentTime") },
    {
      value: "currentStreak",
      element: qs(".streakBox--currentStreak > strong"),
    },
    { value: "bestStreak", element: qs(".streakBox--bestStreak > strong") },
  ];

  dataToReplace.forEach((item) => {
    if (!item.element) {
      return;
    }

    item.element.innerHTML = `${data[item.value]}`;
  });

  createUserList(data.leaderboard);
  showProgressGraph(data);
}
