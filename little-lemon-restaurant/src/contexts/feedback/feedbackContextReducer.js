export const feedbackInitialState = {
  feedbacks: [],
  loading: false,
  error: null,
}

export const feedbackContextReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMIT_FEEDBACK_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'SUBMIT_FEEDBACK_SUCCESS':
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload],
        loading: false,
      }

    case 'SUBMIT_FEEDBACK_FAILURE':
      return {
        ...state,
        loading: false,
        error: `Bir hata olustu: ${action.payload}`,
      }

    case 'RESET':
      return feedbackInitialState

    case 'DEFAULT':
      return state
  }
}
