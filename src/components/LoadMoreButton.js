import { Button } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const StyledButton = styled(Button)`
  && {
    width: 30%;
    height: 75px;
  }
`;

export default function LoadMoreButton() {
  return (
    <StyledButton variant="contained" color="primary">
      Load More...
    </StyledButton>
  )
}
