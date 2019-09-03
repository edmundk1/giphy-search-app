import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider, Typography } from '@material-ui/core';
import FlexContainer from './components/common/FlexContainer';
import GifsContainer from './components/gifs/GifsContainer';
import SearchContainer from './components/search/SearchContainer';
import LoadMoreButton from './components/loadmore/LoadMoreButton';
import { getTrendingGifs, getSearchGifs } from './managers/APIManager';
import LoadIndicatorComponent from './components/loadmore/LoadIndicatorComponent';

const AppContainer = styled(FlexContainer)`
  min-width: 500px;
  width: 100%;
  align-items: center;  
`;

const PaddedTypography = styled(Typography)`
  && {
    padding: 15px;
  }
`;

const BottomGutterDivider = styled(Divider)`
  && {
    width: 90%;
    margin-bottom: 20px;
  }
`;

function App() {
  const initialOffset = 0;
  const [displayedGifs, setDiplayedGifs] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentSearch, setCurrentSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const incrementOffset = () => {
    const increment = 6;
    const tempOffset = currentOffset + increment;
    setCurrentOffset(tempOffset);
  };

  const handleSearch = async (search) => {
    setCurrentOffset(initialOffset);
    setCurrentSearch(search);
    const searchGifs = await getSearchGifs(initialOffset, search);

    setDiplayedGifs(searchGifs);

    incrementOffset();
  };

  const handleLoadMore = async () => {
    setIsSearching(true);
    const additionalGifs = await getSearchGifs(currentOffset, currentSearch);

    if (additionalGifs.length === 6) {
      setIsSearching(false)
      const tempDisplayedGifs = displayedGifs.concat(additionalGifs);
      setDiplayedGifs(tempDisplayedGifs);
      incrementOffset();
    }
  };

  const MoreButton = (currentSearch && !isSearching) ? (<LoadMoreButton clickHandler={handleLoadMore} />) : null;

  const LoadIndicator = isSearching ? (<LoadIndicatorComponent />) : null;

  useEffect(() => {
    const getInitialTrendingGifs = async () => {
      const initialTrendingGifs = await getTrendingGifs(initialOffset);

      setDiplayedGifs(initialTrendingGifs);
    };

    getInitialTrendingGifs();
  }, []);

  return (
    <AppContainer column>
      <PaddedTypography variant="h2">
        Giphy Searcher
      </PaddedTypography>
      <BottomGutterDivider />
      <SearchContainer handleSearch={handleSearch} />
      <GifsContainer gifArray={displayedGifs} />
      {MoreButton}
      {LoadIndicator}
    </AppContainer>
  );
}

export default App;
