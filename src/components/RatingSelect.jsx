import { useState, useContext, useEffect } from "react"
import { FaStar } from "react-icons/fa"
import FeedbackContext from "../context/FeedbackContext"

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(null)
  const [hover, setHover] = useState(null)

  const { feedbackEdit } = useContext(FeedbackContext)

  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleChange = (currentRating) => {
    setSelected(currentRating)
    select(currentRating)
  }
  return (
    <>
      <div className="rating d-flex justify-content-center py-4">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                className="d-none"
              />
              <FaStar
                className="star"
                role="button"
                size={20}
                color={
                  currentRating <= (hover || selected) ? "#ffc107" : "#e4e5e9"
                }
                onClick={() => handleChange(currentRating)}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          )
        })}
      </div>

      {selected && <h1 className="lead">Your rating is: {selected}</h1>}
    </>
  )
}

export default RatingSelect
