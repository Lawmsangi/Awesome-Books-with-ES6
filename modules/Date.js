/* eslint-disable */
import { DateTime } from './Luxon.js';

export const displayTime = () => {
  const now = DateTime.now();
  const date = document.getElementById('date');
  date.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL);
};
