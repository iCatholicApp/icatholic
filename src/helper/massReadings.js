import { dailyMass } from "./api";

export function getTodaysMassReadings() {
  return dailyMass.get();
}
