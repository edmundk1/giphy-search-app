import styled from "styled-components";
import React from "react";

import FlexContainer from "../common/FlexContainer";
import GifComponent from "./GifComponent";
import giphy1 from "../../gifs/giphy1.gif";
import giphy2 from "../../gifs/giphy2.gif";
import giphy3 from "../../gifs/giphy3.gif";
import giphy4 from "../../gifs/giphy4.gif";
import giphy5 from "../../gifs/giphy5.gif";
import giphy6 from "../../gifs/giphy6.gif";

const StyledContainer = styled(FlexContainer)`
  margin: 10px;
  width: 100%; 
`;

const gifArray = [giphy1, giphy2, giphy3, giphy4, giphy5, giphy6];

export default function GifsContainer() {
  return (
    <StyledContainer wrap="wrap">
      {gifArray.map((gif) => (
        <GifComponent gifSrc={gif}/>
      ))}
    </StyledContainer>
  )
}
