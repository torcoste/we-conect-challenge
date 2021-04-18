import React, { useCallback, useState } from "react"

import Navbar from "./components/Navbar/Navbar"
import IFrame from "./components/IFrame/IFrame"

import { emptyMenuItem, menuMockData } from "./components/Navbar/mockData"

function App() {
  const handleClickItem = useCallback((menuItem) => {
    console.log(menuItem)
    setCurrentMenuItem(menuItem)
  }, [])

  const [currentMenuItem, setCurrentMenuItem] = useState(emptyMenuItem)

  return (
    <>
      <Navbar data={menuMockData} onClickItem={handleClickItem} />
      <IFrame url={currentMenuItem.url} title="content" />
    </>
  )
}

export default App
