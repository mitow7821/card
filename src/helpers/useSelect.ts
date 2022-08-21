import type { SelectData, SelectValue } from "../types";
import { changeCardData } from "./dataPresentation";

const selectData: SelectData = {
  week: {
    timeLimit: 50,
    currentTime: 38,
    timeLeft: 12,
    currentStreak: 4,
    bestStreak: 12,
    leaderboard: [
      { position: 1, name: "Walter Wynne", time: 105, status: "active" },
      { position: 2, name: "Annabel Ferdinand", time: 52, status: "finished" },
      { position: 3, name: "Marty McFly", time: 50, status: "active" },
      {
        position: 7,
        name: "You!",
        time: 38,
        status: "active",
        isCurrentUser: true,
      },
    ],
  },

  month: {
    timeLimit: 50,
    currentTime: 12,
    timeLeft: 186,
    currentStreak: 7,
    bestStreak: 44,
    leaderboard: [
      { position: 1, name: "Annabel Ferdinand", time: 108, status: "finished" },
      { position: 2, name: "Walter Wynne", time: 35, status: "active" },
      {
        position: 3,
        name: "You!",
        time: 12,
        status: "active",
        isCurrentUser: true,
      },
      { position: 4, name: "Marty McFly", time: 5, status: "active" },
    ],
  },
};

function handleSelectChange(selectValue: SelectValue): void {
  const dataToDisplay = selectData[selectValue];

  changeCardData(dataToDisplay);
}

export default () => {
  const select = document.querySelector(".leaderboard__select");

  select?.addEventListener("change", (e) => {
    const selectValue = (e.target as HTMLSelectElement).value as SelectValue;

    handleSelectChange(selectValue);
  });

  return { handleSelectChange };
};
