import styled from "styled-components";
import React from "react";
import FlexContainer from "../common/FlexContainer";

const StyledComponentContainer = styled(FlexContainer)`
  width: 30%;
  height: 30%;
  margin: auto;
  margin-top: 10px;
`

export default function GifComponent(props) {
  return (
    <StyledComponentContainer>
      <img src={props.gifSrc} />
    </StyledComponentContainer>
  )
}
