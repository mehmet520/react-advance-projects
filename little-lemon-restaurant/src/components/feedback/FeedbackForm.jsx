import React from 'react'

function FeedbackForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="card max-w-xl mx-auto mt-8 dark:bg-white p-4 rounded-lg shadow">
      <h2 className="dark:text-blue-950 text-2xl font-semibold mb-4 ">
        Feedback Form
      </h2>
      <form onSubmit={handleSubmit} className="">
        <div className="flex items-center card m-4 border">
          <label htmlFor="range" className="mr-4">
            Score: {formData.score} ⭐
          </label>
          <input
            className=""
            type="range"
            name="score"
            id="range"
            value={String(formData.score)}
            onChange={handleChange}
            min="0"
            max="10"
            step="1"
          />
        </div>
        <div className="card m-4 flex items-center border">
          <label htmlFor="comments" className="mr-4 mb-0">
            Additional Comments:
          </label>
          <textarea
            className=" "
            name="comments"
            id="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            cols={50}
            placeholder="Let the chef know how it was!"
          ></textarea>
        </div>
        <button type="submit" className=" m-4 mt-0 py-3">
          Submit Feedback
        </button>
      </form>
    </div>
  )
}

export default React.memo(FeedbackForm)
