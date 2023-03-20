import React from "react"

import "../styles/welcome.css"
import Logo from "../assets/images/logo.png"

// component that receives the props element as a parameter. It is a reference to the element that will fire the sticky effect when scrolling.
const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome">
        <div className="container" ref={element}>
          <img src={Logo} alt="logo" className="welcome__logo" />
          <div className="container--narrow">
            <p>Scroll down or click on the button to get to the character's gallery.</p>
            <a href="#characterSection" className="button-30" id="btnCharacterSection">Check out the characters</a>
            <a href="#imageGenerator" className="button-30" id="btnImageGenerator">Jump to Image Generator</a>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Welcome