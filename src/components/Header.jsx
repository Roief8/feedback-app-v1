import AboutIconLink from "./AboutIconLink"
import { Link } from "react-router-dom"
function Header({ text, bgColor, txtColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: txtColor,
    textAlign: "center",
    padding: "10px",
  }
  return (
    <header style={headerStyles}>
      <div className="container d-flex align-items-center">
        <h2 className="m-auto">{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  txtColor: "#fff",
}

export default Header
