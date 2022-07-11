export const addEvent = ({
    id = '',
    month='',
    calendarEvent = []
  } = {}) => ({
  type: 'ADD_EVENT',
  event: {
    id,
    month,
    calendarEvent
  }
})

export const removeEvent = ({id, day, month}) => ({
  type: 'REMOVE_EVENT',
  event: {
    id,
    day,
    month
  }
})
