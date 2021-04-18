import React, { useCallback, useState } from "react"
import { Story, Meta } from "@storybook/react"
import { emptyMenuItem, menuMockData } from "./mockData"
import Navbar, { NavbarProps } from "./Navbar"

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<NavbarProps> = (args) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(emptyMenuItem)
  const handleClickItem = useCallback((menuItem) => {
    setCurrentMenuItem(menuItem)
  }, [])

  return (
    <>
      <Navbar {...args} onClickItem={handleClickItem} />
      <p>{`title: ${currentMenuItem.title}`}</p>
      <p>{`slug: ${currentMenuItem.slug}`}</p>
      <p>{`url: ${currentMenuItem.url}`}</p>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  data: menuMockData,
}

