import { createContext, useCallback, useMemo, useReducer } from 'react'
import {
  feedbackInitialState,
  feedbackContextReducer,
} from './feedbackContextReducer'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    feedbackContextReducer,
    feedbackInitialState,
  )

  const submitFeedback = useCallback(
    async (formData) => {
      dispatch({ type: 'SUBMIT_FEEDBACK_REQUEST' })
      try {
        await new Promise((res) => {
          setTimeout(res, 1000)
        })
        dispatch({ type: 'SUBMIT_FEEDBACK_SUCCESS', payload: formData })
      } catch (error) {
        dispatch({
          type: 'SUBMIT_FEEDBACK_FAILURE',
          payload: `Feedback gönderimi başarisiz: ${error}`,
        })
      }
    },
    [dispatch],
  )

  const contextValue = useMemo(
    () => ({ ...state, submitFeedback }),
    [state, submitFeedback],
  )
  return (
    <FeedbackContext.Provider value={contextValue}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
