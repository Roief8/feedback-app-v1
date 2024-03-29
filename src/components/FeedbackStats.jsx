import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  //calculate rating avs
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length
  average = average.toFixed(1).replace(/[.,]0$/, "")

  return (
    <div className="feedback-stats container-fluid w-75 d-flex justify-content-around p-2 mb-5 border-bottom ">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
