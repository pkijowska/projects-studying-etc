export const addEvent = ({
    id = '',
    calendarEvent = []
  } = {}) => ({
  type: 'ADD_EVENT',
  event: {
    id,
    calendarEvent,
  }
})

export const removeEvent = (id, day) => ({
  type: 'REMOVE_EVENT',
  id,
  day
})
