import React, { useCallback, useState } from "react"
import { useHistory } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import IFrame from "./components/IFrame/IFrame"

import { emptyMenuItem, menuMockData } from "./components/Navbar/mockData"
import { MenuItem } from "./components/Navbar/types"

function App() {
  const history = useHistory()

  const handleClickItem = useCallback(
    (menuItem: MenuItem) => {
      setCurrentMenuItem(menuItem)
      history.push(menuItem.slug)
    },
    [history]
  )

  const [currentMenuItem, setCurrentMenuItem] = useState(emptyMenuItem)

  return (
    <>
      <Navbar data={menuMockData} onClickItem={handleClickItem} />
      <IFrame url={currentMenuItem.url} title="content" />
    </>
  )
}

export default App
