import React from "react"
import "../styles/navbar.css"
import Logo from "../assets/images/logo.png"

const Navbar = ({sticky}) => (
  <nav className={sticky
      ? "navbar navbar--sticky"
      : "navbar"}>
    <div className="navbar__logo-holder">
      {sticky
        ? (
          <>
          <img src={Logo} alt="logo" className="navbar__logo" />
          <p className="text--hg">Characters</p></>
        )
        : null}
    </div>
    <ul className="navbar__list push-right">
      <li className="navbar__item">Home</li>
      <li className="navbar__item">Gallery</li>
      <li className="navbar__item">Image Generator</li>
    </ul>
  </nav>
)
export default Navbar