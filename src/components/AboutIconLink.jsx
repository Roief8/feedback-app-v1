import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

function AboutIconLink() {
  return (
    <div className="about-link position-absolute end-0 p-3 ">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
