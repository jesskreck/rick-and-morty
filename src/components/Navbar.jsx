import React from "react"
import "../styles/navbar.css"
import Logo from "../assets/images/logo.png"

const Navbar = ({sticky}) => (
  <nav className={sticky
      ? "navbar navbar--sticky"
      : "navbar"}>
    <div className="navbar__logo-holder">{sticky
        ? <img src={Logo} alt="logo" className="navbar__logo" />
        : null}
      <h1>Characters</h1>
    </div>
    <ul className="navbar__list push-right">
      <li className="navbar__item">Home</li>
      <li className="navbar__item">About</li>
      <li className="navbar__item">Blog</li>
    </ul>
  </nav>
)
export default Navbar