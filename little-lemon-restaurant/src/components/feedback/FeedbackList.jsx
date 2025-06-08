import React from 'react'
import useFeedback from '../../contexts/feedback/useFeedback'

function FeedbackList() {
  const { feedbacks, loading, error } = useFeedback()

  if (loading) return <p>Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>
  if (!feedbacks.length) return <p>No feedback submitted yet.</p>

  return (
    <div className="card mt-6 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">Submitted Feedbacks</h2>
      <ul className="space-y-2">
        {feedbacks.map((fb, idx) => (
          <li key={idx} className="p-2 border rounded shadow-sm">
            <p>
              <strong>Score:</strong> {fb.score} ⭐
            </p>
            <p>
              <strong>Comment:</strong> {fb.comments}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(FeedbackList)
