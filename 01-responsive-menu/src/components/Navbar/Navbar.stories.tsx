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
    <div id="navbar-test-mount-point">
      <Navbar {...args} onClickItem={handleClickItem} />
      <p>
        title: <span id="currentMenuItemTitle">{currentMenuItem.title}</span>
      </p>
      <p>
        slug: <span id="currentMenuItemSlug">{currentMenuItem.slug}</span>
      </p>
      <p>
        url: <span id="currentMenuItemUrl">{currentMenuItem.url}</span>
      </p>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  data: menuMockData,
}
