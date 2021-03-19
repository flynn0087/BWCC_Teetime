let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
  
];

export const events = [
{
   title: 'event 1',
    date: '2021-03-19' }
  
];


export function createEventId() {
  console.log(eventGuid);
  return String(eventGuid++);
}
