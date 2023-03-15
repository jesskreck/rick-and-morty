import React from "react"

import "../styles/welcome.css"
import Logo from "../assets/images/logo.png"

// component that receives the props element as a parameter. It is a reference to the element that will fire the sticky effect when scrolling.
const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome">
        <div ref={element}>
          <img src={Logo} alt="logo" className="welcome__logo" />
          <p>Even if you scroll, I will stick with you</p>
          <button className="welcome__btn">Check out the characters</button>
        </div>
      </section>
    </main>
  )
}

export default Welcome