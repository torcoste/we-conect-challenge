import React, { useCallback } from "react"
import styled from "styled-components"
import { MENU_ACTIVE_COLOR, MENU_ITEM_HEIGHT } from "../constants"
import { MenuItem } from "../types"
import DropdownItem from "./DropdownItem"

const ItemComponent = styled.li`
  padding: 0;
  margin: 0;
  flex: 1;

  cursor: pointer;

  justify-content: center;
  align-items: center;
  text-align: center;

  line-height: ${MENU_ITEM_HEIGHT};

  &:hover {
    background-color: ${MENU_ACTIVE_COLOR};
  }
`

interface ItemProps {
  data: MenuItem
  onClickItem: (menuItem: MenuItem) => void
}

const ItemWithoutChildren = ({ data, onClickItem }: ItemProps) => {
  const handleClick = useCallback(() => onClickItem(data), [onClickItem, data])
  return <ItemComponent onClick={handleClick}>{data.title}</ItemComponent>
}

const Item = ({ data, onClickItem }: ItemProps) => {
  if (data.children)
    return (
      <ItemComponent>
        <DropdownItem data={data} onClickItem={onClickItem} />
      </ItemComponent>
    )

  return <ItemWithoutChildren data={data} onClickItem={onClickItem} />
}

export default Item
