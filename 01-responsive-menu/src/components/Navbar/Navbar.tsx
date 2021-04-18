import React, { useCallback } from "react"
import styled from "styled-components"
import { AiOutlineMenu } from "react-icons/ai"

import Item from "./Elements/Item"
import {
  MENU_BACKGROUND_COLOR,
  MENU_ICON_SIZE,
  MENU_ITEM_HEIGHT,
} from "./constants"
import { MenuData, MenuItem } from "./types"

const NavbarWrapper = styled.nav`
  height: ${MENU_ITEM_HEIGHT};
  width: 100%;
  justify-content: center;
  display: flex;

  @media (min-width: 768px) {
    background-color: ${MENU_BACKGROUND_COLOR};
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`

const MenuContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;

  background-color: ${MENU_BACKGROUND_COLOR};
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    display: none;
  }
  @media (min-width: 768px) {
    max-width: 500px;
  }
`

const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
  id: "drop-navbar",
})`
  display: none;

  @media (max-width: 768px) {
    &:checked + ${MenuContainer} {
      display: flex;
    }
  }
`
const Label = styled.label`
  height: ${MENU_ITEM_HEIGHT};
  display: block;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`

interface NavbarProps {
  data: MenuData
  onClickItem: (menuItem: MenuItem) => void
}

const Navbar = ({ data, onClickItem }: NavbarProps) => {
  const renderItem = useCallback(
    (menuItem) => (
      <Item key={menuItem.slug} data={menuItem} onClickItem={onClickItem} />
    ),
    [onClickItem]
  )

  return (
    <NavbarWrapper>
      <Label htmlFor="drop-navbar">
        <AiOutlineMenu size={MENU_ICON_SIZE} />
      </Label>
      <HiddenCheckbox />
      <MenuContainer>{data.map(renderItem)}</MenuContainer>
    </NavbarWrapper>
  )
}

export default Navbar
