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

const NavbarWrapper = styled.nav<{ $backgroundColor?: string }>`
  height: ${MENU_ITEM_HEIGHT};
  width: 100%;
  justify-content: center;
  display: flex;

  @media (min-width: 768px) {
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor || MENU_BACKGROUND_COLOR};
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`

const MenuContainer = styled.ul.attrs({
  id: "menu-container",
})<{ $backgroundColor?: string }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || MENU_BACKGROUND_COLOR};
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

export interface NavbarProps {
  data: MenuData
  onClickItem: (menuItem: MenuItem) => void
  backgroundColor?: string
}

const Navbar = ({ data, onClickItem, backgroundColor }: NavbarProps) => {
  const renderItem = useCallback(
    (menuItem) => (
      <Item
        key={menuItem.slug}
        data={menuItem}
        onClickItem={onClickItem}
        backgroundColor={backgroundColor}
      />
    ),
    [onClickItem, backgroundColor]
  )

  return (
    <NavbarWrapper $backgroundColor={backgroundColor}>
      <Label htmlFor="drop-navbar" id="drop-navbar-label">
        <AiOutlineMenu size={MENU_ICON_SIZE} />
      </Label>
      <HiddenCheckbox />
      <MenuContainer $backgroundColor={backgroundColor}>
        {data.map(renderItem)}
      </MenuContainer>
    </NavbarWrapper>
  )
}

export default Navbar
