export const initialState = { name: '', date: '' }

export function reservationFormReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.name]: action.value }
    case 'RESET':
      return initialState
    default:
      return state
  }
}
