import React, { useCallback } from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import { menuMockData } from "./components/Navbar/mockData"

function App() {
  const handleClickItem = useCallback((menuItem) => {
    console.log(menuItem)
  }, [])

  return (
    <>
      <Navbar data={menuMockData} onClickItem={handleClickItem} />
    </>
  )
}

export default App
