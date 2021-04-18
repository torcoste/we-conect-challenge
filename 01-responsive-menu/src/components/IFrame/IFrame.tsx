import React from "react"
import styled from "styled-components"
import { MENU_ITEM_HEIGHT } from "../Navbar/constants"

interface IFrameProps {
  title: string
  url: string
}

const IFrameComponent = styled.iframe`
  display: block;
  border: none;
  height: calc(100vh - ${MENU_ITEM_HEIGHT});
  width: 100vw;
`

const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${MENU_ITEM_HEIGHT});
`

const IFrame = ({ title, url }: IFrameProps) => {
  if (!url) {
    return (
      <NoContentContainer>
        <h1>No content</h1>
        <p>Choose content from menu</p>
      </NoContentContainer>
    )
  }
  return <IFrameComponent title={title} src={url} />
}

export default IFrame
