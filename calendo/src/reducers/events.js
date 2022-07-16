const eventsReducerDefaultState = [
  {id: 1, calendarEvent: []},
  {id: 2, calendarEvent: []},
  {id: 3, calendarEvent: []},
  {id: 4, calendarEvent: []},
  {id: 5, calendarEvent: []},
  {id: 6, calendarEvent: []},
  {id: 7, calendarEvent: []},
  {id: 8, calendarEvent: []},
  {id: 9, calendarEvent: []},
  {id: 10, calendarEvent: []},
  {id: 11, calendarEvent: []},
  {id: 12, calendarEvent: []},
  {id: 13, calendarEvent: ["Work out", "Go  and see grandma", "Book dentist"]},
  {id: 14, calendarEvent: []},
  {id: 15, calendarEvent: []},
  {id: 16, calendarEvent: []},
  {id: 17, calendarEvent: ["Read 50 pages of a book"]},
  {id: 18, calendarEvent: []},
  {id: 19, calendarEvent: []},
  {id: 20, calendarEvent: []},
  {id: 21, calendarEvent: []},
  {id: 22, calendarEvent: []},
  {id: 23, calendarEvent: []},
  {id: 24, calendarEvent: []},
  {id: 25, calendarEvent: []},
  {id: 26, open: 'open', calendarEvent: []},
  {id: 27, calendarEvent: ["Study react"]},
  {id: 28, calendarEvent: ["Check flight to Gib",
"Add reducers",
"change date to shake when you click on a different card",
"change the current card to current day",
"Data structure course"]},
  {id: 29, calendarEvent: []},
  {id: 30, calendarEvent: ["See Elena at the beach"]},
  {id: 31, calendarEvent: ["Go to pilates classes"]}
];

export default (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DAY':
    return [
      ...state,
      action.event
    ]
    case 'ADD_EVENT':
      return state.map((event) => {
        if (event.id === action.event.id) {
          return {
            ...event,
            calendarEvent: [
              ...event.calendarEvent, action.event.calendarEvent
            ]
          };
        } else {
          return event;
        };
      });
    case 'REMOVE_EVENT':
      return state.map(element =>{
          if (element.id === action.event.day) {
            const afterRemoveArr = element.calendarEvent.filter((el,i)=> i !== action.event.id)
            return {
              ...element,
              calendarEvent: afterRemoveArr
            }
          } else {
            return element
          }
        })
    default:
      return state;
  }
};
