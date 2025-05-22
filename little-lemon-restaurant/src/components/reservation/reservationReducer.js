export const initialState = { name: '' }

export function reservationReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'RESET':
      return initialState
    default:
      return state
  }
}
