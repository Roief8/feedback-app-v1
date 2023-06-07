import { FaTimes, FaStar, FaEdit } from "react-icons/fa"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Card from "./shared/Card"

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="top-display bubble d-flex justify-content-between pb-3">
        <div className="star-rating pb-3 ">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1
            return (
              <FaStar
                className="star "
                size={20}
                color={currentRating <= item.rating ? "#ffc107" : "#e4e5e9"}
              />
            )
          })}
        </div>
        <div className="buttons-section">
          <FaEdit
            role="button"
            className="edit"
            onClick={() => editFeedback(item)}
          />
          <FaTimes
            role="button"
            onClick={() => deleteFeedback(item.id)}
            className="close mx-1"
          />
        </div>
      </div>

      <div className="text-display pb-4">{item.text}</div>
      <div className="user-display text-secondary">{item.user} </div>
    </Card>
  )
}

export default FeedbackItem
