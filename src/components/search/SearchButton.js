import { Button } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const StyledButton = styled(Button)`
  && {
    width: 20%;
  }
`;

export default function SearchButton() {
  return (
    <StyledButton variant="contained" color="primary">
      Search
    </StyledButton>
  )
}
