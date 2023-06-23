import { dailyMass } from "./api";

export function getTodaysMassReadings(date) {
  return dailyMass.get(`/${date}/jsonpmass.js`);
}
