import React from "react"
import useSticky from "./hooks/useSticky.jsx"
import Welcome from "./components/Welcome"
import Navbar from "./components/Navbar"
import Characters from "./components/Characters"

function App() {
  const { isSticky, element } = useSticky()
  return (
    <>
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
      <Characters />
    </>
  )
}

export default App