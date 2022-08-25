import events from '../fixtures/events';
import eventsReducer from '../../reducers/events';

test('Should add an event',()=> {
  const event = {
    id: 2,
    month: 'July',
    calendarEvent: 'Hairdresser appointment'
  }
  const action = {
    type: 'ADD_EVENT',
    event
  }

  const state = eventsReducer(events, action)
  console.log(state)

  expect(state).toEqual([
    {id: 1, month: 'July', calendarEvent: ['Interview with Tom']},
    {id: 2, month: 'July', calendarEvent: ['Hairdresser appointment']},
    {id: 3, month: 'July', calendarEvent: []},
    {id: 4, month: 'July', calendarEvent: ["Check flight to Gib",
  "Add reducers",
  "change date to shake when you click on a different card",
  "change the current card to current day",
  "Data structure course"]}
  ])
})

test('should succesfully remove an event', ()=> {
  let id =  0;
  let day = 1;
  let month = 'July';

  const action = {
    type: 'REMOVE_EVENT',
    event: {
      id:  0,
      day: 1,
      month: 'July'
    }
  }

  const state = eventsReducer(events, action)
  expect(state).toEqual([
    {id: 1, month: 'July', calendarEvent: []},
    {id: 2, month: 'July', calendarEvent: []},
    {id: 3, month: 'July', calendarEvent: []},
    {id: 4, month: 'July', calendarEvent: ["Check flight to Gib",
  "Add reducers",
  "change date to shake when you click on a different card",
  "change the current card to current day",
  "Data structure course"]}
  ])
})
