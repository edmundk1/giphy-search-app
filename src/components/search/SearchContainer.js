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
  const [isError, setIsError] = useState(false);

  const isSearchValid = (search) => {
    const whiteSpaceRegex = new RegExp("^\\s+$");
    const whiteSpaceRemovedStr = search.replace(whiteSpaceRegex, "");
    return whiteSpaceRemovedStr.length > 0
  };

  const handleSearchChange = (search) => {
    setSearchString(search);
  };

  const handleClick = () => {
    let isValid = isSearchValid(searchString);
    if (isValid) {
      setIsError(false);
      props.handleSearch(searchString);
    } else {
      setIsError(true);
    }
  };


  return (
    <SearchComponentsContainer>
      <SearchBar
        value={searchString}
        searchHandler={handleSearchChange}
        error={isError}
      />
      <SearchButton clickHandler={handleClick} />
    </SearchComponentsContainer>
  )
}
