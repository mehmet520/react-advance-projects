import { useState } from 'react'
import FeedbackForm from './FeedbackForm'

export default function FeedbackContainer() {
  const [formData, setFormData] = useState({
    score: 10,
    comments: '',
  })
  //   const [comments, setComments] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: isNaN(Number(value)) ? value : Number(value),
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.score <= 5 && formData.comments.trim().length < 10) {
      alert(
        'Please provide a more detailed comment (at least 10 characters) for low scores.',
      )
      return
    }
    console.log(
      `Form gonderildi.\n Score: ${formData.score} - Comments: ${formData.comments}`,
    )
    alert('Thank you for your feedback!')

    setFormData({
      score: 10,
      comments: '',
    })
  }
  return (
    <FeedbackForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
