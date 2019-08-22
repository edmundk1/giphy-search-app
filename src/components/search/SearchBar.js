import { TextField } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const StyledTextField = styled(TextField)`
  && {
    width: 80%;
    fieldset {
      border-color: gray;
      border-width: 2px;
    }
  }
`

export default function SearchBar() {
  return (
    <StyledTextField variant={"outlined"}/>
  )
}
