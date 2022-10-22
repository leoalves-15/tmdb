export const Convert = (minutes?: number) => {
  minutes = minutes || 0;
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;
  const Hours = `00${hours}`.slice(-1);
  const Minutes = `00${min}`.slice(-2);

  return `${Hours}h ${Minutes}m`;
};
