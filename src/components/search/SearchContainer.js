import styled from "styled-components";
import React, {useState} from 'react';

import FlexContainer from "../common/FlexContainer";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

const SearchComponentsContainer = styled(FlexContainer)`
  width: 100%;
`;

export default function SearchContainer(props) {
  const [searchString, setSearchString] = useState("");

  const handleSearchChange = (search) => {
    setSearchString(search);
  };

  const handleClick = () => {
    props.handleSearch(searchString);
  };


  return (
    <SearchComponentsContainer>
      <SearchBar value={searchString} searchHandler={handleSearchChange} />
      <SearchButton clickHandler={handleClick} />
    </SearchComponentsContainer>
  )
}
