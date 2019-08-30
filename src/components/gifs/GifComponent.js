import styled from "styled-components";
import React from "react";
import FlexContainer from "../common/FlexContainer";

const StyledComponentContainer = styled(FlexContainer)`
  width: 400px;
  height: 400px;
  margin: auto;
  margin-top: 10px;
`;

const StyledImg = styled.img`
  object-fit: cover;
  
  width: 400px;
  height: 400px;
`;

export default function GifComponent(props) {
  return (
    <StyledComponentContainer>
      <StyledImg src={props.gifSrc} />
    </StyledComponentContainer>
  )
}
