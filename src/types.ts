type SelectValue = "month" | "week";
type UserStatus = "active" | "finished";

interface User {
  name: string;
  time: number;
  status: UserStatus;
  position: number;
  isCurrentUser?: boolean;
}

interface CardData {
  timeLimit: number;
  currentTime: number;
  timeLeft: number;
  currentStreak: number;
  bestStreak: number;
  leaderboard: User[];
}

type SelectData = Record<SelectValue, CardData>;

interface ReplaceDataItem {
  value: keyof CardData;
  selector: string;
  suffix?: string;
}

export type {
  SelectValue,
  User,
  CardData,
  SelectData,
  ReplaceDataItem,
  UserStatus,
};
