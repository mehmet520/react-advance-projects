export const reservationInitialState = {
  reservations: [],
  loading: false,
  error: null,
}

export function reservationContextReducer(state, action) {
  switch (action.type) {
    case 'SUBMIT_REQUEST':
      return { ...state, loading: true, error: null }

    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        reservations: [...state.reservations, action.payload],
      }

    case 'SUBMIT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case 'RESET':
      return reservationInitialState

    default:
      return state
  }
}
