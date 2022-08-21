import { CardData, ReplaceDataItem, User, UserStatus } from "../types";
import { getCircleSvg } from "./getSvg";

const qs = (selector: string) => document.querySelector(selector);

const createListItem = (isCurrentUser: boolean, status: UserStatus) => {
  const listItem = document.createElement("div");
  listItem.classList.add("listItem", `listItem--${status}`);

  if (isCurrentUser) {
    listItem.classList.add(`listItem--selected`);
  }

  return listItem;
};

const getArrowIcon = (isCurrentUser: boolean) =>
  isCurrentUser ? "/white-arrow.png" : "/green-arrow.png";

function createListRowIcon(userData: User) {
  const icon = document.createElement("img");
  icon.classList.add("listItem__icon", `listItem__icon--${userData.status}`);
  icon.src =
    userData.status === "active"
      ? getArrowIcon(!!userData?.isCurrentUser)
      : "/circle.png";

  return icon;
}

function createListRow(userData: User) {
  const listItem = createListItem(!!userData?.isCurrentUser, userData.status);

  const spanElements = [
    { class: "listItem__position", value: userData.position },
    { class: "listItem__name", value: userData.name },
    { class: "listItem__time", value: `${userData.time}m` },
  ];

  spanElements.forEach((element) => {
    const spanEl = document.createElement("span");
    spanEl.classList.add(element.class);
    spanEl.innerText = `${element.value}`;
    listItem.append(spanEl);
  });

  const icon = createListRowIcon(userData);
  listItem.append(icon);

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

const valuesToReplace: ReplaceDataItem[] = [
  { value: "timeLeft", selector: ".progress__minutesLeft > strong" },
  { value: "timeLimit", selector: ".progress__timeLimit", suffix: "m Goal" },
  { value: "currentTime", selector: ".progress__currentTime", suffix: "m" },
  { value: "currentStreak", selector: ".streakBox--currentStreak > strong" },
  { value: "bestStreak", selector: ".streakBox--bestStreak > strong" },
];

export function changeCardData(data: CardData) {
  valuesToReplace.forEach((item) => {
    const element = qs(item.selector);

    if (!element) {
      return;
    }

    element.innerHTML = `${data[item.value]}${item?.suffix ?? ""}`;
  });

  createUserList(data.leaderboard);
  showProgressGraph(data);
}
