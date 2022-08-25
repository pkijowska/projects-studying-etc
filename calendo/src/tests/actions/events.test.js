import { addEvent, removeEvent } from '../../actions/events';

test('should add a new event', ()=> {
  const event = {
    id:4,
    month:'June',
    calendarEvent: 'Concert in Kew Gardens'
  }
  const action = addEvent(event)

  expect(action).toEqual({
    type: 'ADD_EVENT',
    event
  })
})

test('should remove an event', ()=> {
  const event = {
    id:1,
    day: 4,
    month:'June',
  }
  const action = removeEvent(event)

  expect(action).toEqual({
    type: 'REMOVE_EVENT',
    event
  })
})
