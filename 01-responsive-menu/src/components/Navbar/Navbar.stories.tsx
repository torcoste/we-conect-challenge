import React, { useCallback, useState } from "react"
import { emptyMenuItem, menuMockData } from "./mockData"
import Navbar from "./Navbar"

export const NavbarExample = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(emptyMenuItem)
  const handleClickItem = useCallback((menuItem) => {
    setCurrentMenuItem(menuItem)
  }, [])

  return (
    <>
      <Navbar data={menuMockData} onClickItem={handleClickItem} />
      <p>{`title: ${currentMenuItem.title}`}</p>
      <p>{`slug: ${currentMenuItem.slug}`}</p>
      <p>{`url: ${currentMenuItem.url}`}</p>
    </>
  )
}

export default {
  title: "Navbar",
}
