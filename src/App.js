import React from "react"
import useSticky from "./hooks/useSticky.jsx"
import Welcome from "./pages/Welcome"
import Navbar from "./components/Navbar"
import CharacterGallery from "./pages/CharacterGallery"


function App() {
  const { isSticky, element } = useSticky()
  return (
    <>
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
      <CharacterGallery />
    </>
  )
}

export default App