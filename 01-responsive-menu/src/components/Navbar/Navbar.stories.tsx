import React, { useCallback, useState } from "react"
import { menuMockData } from "./mockData"
import Navbar from "./Navbar"

export const NavbarExample = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState({
    title: "",
    slug: "",
    url: "",
  })
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
