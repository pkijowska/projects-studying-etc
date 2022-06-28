export const addEvent = () => ({
  type: 'ADD_EVENT'
})

export const removeEvent = (eventNr) => ({
  type: 'REMOVE_EVENT',
  eventNr
})
