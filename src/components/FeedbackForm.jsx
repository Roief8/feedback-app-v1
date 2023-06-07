import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  const [formInputs, setFormInputs] = useState({
    text: "",
    user: "",
  })
  const [text, setText] = useState("")
  const [userName, setUserName] = useState("")
  const [rating, setRating] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      console.log(feedbackEdit.item)
      setBtnDisabled(false)
      setFormInputs({
        user: feedbackEdit.item.user,
        text: feedbackEdit.item.text,
      })
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleChanges = (e) => {
    const { name, value } = e.target

    if (formInputs.text === "") {
      setBtnDisabled(true)
      setMessage("")
    } else if (formInputs.text !== "" && formInputs.text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage("Text must contain at least 10 character")
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setFormInputs((prev) => {
      return { ...prev, [name]: value }
    })
  }

  // const handleTextChange = (e) => {
  //   if (text === "") {
  //     setBtnDisabled(true)
  //     setMessage("")
  //   } else if (text !== "" && text.trim().length <= 10) {
  //     setBtnDisabled(true)
  //     setMessage("Text must contain at least 10 character")
  //   } else {
  //     setBtnDisabled(false)
  //     setMessage(null)
  //   }

  //   setText(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    // validate text is longer then 10 char
    if (formInputs.text.trim().length > 10) {
      const newFeedback = {
        text: formInputs.text,
        user: formInputs.user,
        rating,
      }
      //validate rating is not 0 by default
      if (rating === 0) {
        if (window.confirm("sure you meant to rate us 0?")) {
          addFeedback(newFeedback)
          return
        } else return
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else addFeedback(newFeedback)
      setText("")
      setUserName("")
      setBtnDisabled(true)
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit} className="mx-auto text-center">
        <h2>Rate our service</h2>

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group d-flex justify-content-center py-3">
          <input
            className="w-100 p-4 mb-4 border text-center"
            onChange={handleChanges}
            type="text"
            name="text"
            placeholder="Write a review"
            value={formInputs.text}
          />
          <input
            className="w-100 mb-2 border"
            onChange={handleChanges}
            type="text"
            name="user"
            placeholder="Name"
            value={formInputs.user}
          />
        </div>
        <Button type="submit" isDisabled={btnDisabled}>
          Send
        </Button>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
