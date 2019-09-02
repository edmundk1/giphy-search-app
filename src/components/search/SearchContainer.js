import styled from "styled-components";
import React from 'react';

import FlexContainer from "../common/FlexContainer";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

const SearchComponentsContainer = styled(FlexContainer)`
  width: 100%;
`;

export default function SearchContainer() {
  return (
    <SearchComponentsContainer>
      <SearchBar />
      <SearchButton />
    </SearchComponentsContainer>
  )
}
