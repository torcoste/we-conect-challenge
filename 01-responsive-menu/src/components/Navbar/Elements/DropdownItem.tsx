import React, { useCallback } from "react"
import styled from "styled-components"
import { MENU_BACKGROUND_COLOR } from "../constants"
import { MenuItem } from "../types"
import Item from "./Item"

const DropdownContainer = styled.ul<{ $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || MENU_BACKGROUND_COLOR};
  display: none;
  position: static;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    position: relative;
  }
`

const Label = styled.label`
  display: block;
  cursor: pointer;
`

const LabelSpan = styled.span`
  display: block;
`

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:hover + ${Label} > ${DropdownContainer} {
    display: block;
  }
`

interface DropdownItemProps {
  data: MenuItem
  onClickItem: (menuItem: MenuItem) => void
  backgroundColor?: string
}

const DropdownItem = ({
  data,
  onClickItem,
  backgroundColor,
}: DropdownItemProps) => {
  const handleClick = useCallback(() => onClickItem(data), [onClickItem, data])
  const renderItem = useCallback(
    (menuItem) => (
      <Item key={menuItem.slug} data={menuItem} onClickItem={onClickItem} />
    ),
    [onClickItem]
  )
  const dropId = `drop-${data.slug}`
  const childrenMenuId = `${data.slug}-children`
  return (
    <>
      <HiddenCheckbox id={dropId} />
      <Label htmlFor={dropId}>
        <LabelSpan id={data.slug} onClick={handleClick}>
          {data.title}
        </LabelSpan>
        <DropdownContainer
          id={childrenMenuId}
          $backgroundColor={backgroundColor}
        >
          {data.children!.map(renderItem)}
        </DropdownContainer>
      </Label>
    </>
  )
}

export default DropdownItem
