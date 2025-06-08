import { useCallback, useState } from 'react'
import FeedbackForm from './FeedbackForm'
import useFeedback from '../../contexts/feedback/useFeedback'

export default function FeedbackContainer() {
  const { submitFeedback, loading, error } = useFeedback()
  const [formData, setFormData] = useState({
    score: 10,
    comments: '',
  })

  //   const [comments, setComments] = useState('')

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: isNaN(Number(value)) ? value : Number(value),
    }))
  }, [])
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      if (formData.score <= 5 && formData.comments.trim().length < 10) {
        alert(
          'Please provide a more detailed comment (at least 10 characters) for low scores.',
        )
        return
      }

      submitFeedback(formData)
      console.log(
        `Form gonderildi.\n Score: ${formData.score} - Comments: ${formData.comments}`,
      )
      alert('Thank you for your feedback!')

      setFormData({
        score: 10,
        comments: '',
      })
    },
    [formData, submitFeedback],
  )
  return (
    <FeedbackForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
