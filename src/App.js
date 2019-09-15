import { Divider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import FlexContainer from './components/common/FlexContainer';
import GifsContainer from './components/gifs/GifsContainer';
import SearchContainer from './components/search/SearchContainer';
import { getTrendingGifs, getSearchGifs, defaultNumResults } from './managers/APIManager';
import LoadIndicatorComponent from './components/loadMore/LoadIndicatorComponent';
import GifModalComponent from './components/gifs/gifModal/GifModalComponent';
import PaginationNavComponent from './components/loadMore/PaginationNavComponent';

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
  const initialPage = 0;
  const initialTotalResults = 0;
  const [displayedGifs, setDiplayedGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [currentSearch, setCurrentSearch] = useState('');
  const [totalResults, setTotalResults] = useState(initialTotalResults);
  const [isSearching, setIsSearching] = useState(false);
  const [gifModalSrc, setGifModalSrc] = useState('');
  const [numResultsPerPage, setNumResultsPerPage] = useState(defaultNumResults);

  const handleSearch = async (search) => {
    if (search.length > 0) {
      setTotalResults(initialTotalResults);
      setCurrentPage(initialPage);
      setCurrentSearch(search);
      const searchGifsResponse = await getSearchGifs(initialPage, numResultsPerPage, search);
      const searchGifsData = await searchGifsResponse.data;
      const searchGifsPagination = await searchGifsResponse.pagination;

      setTotalResults(searchGifsPagination.total_count);
      setDiplayedGifs(searchGifsData);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleResultsPerPageChange = (newNumResultsPerPage) => {
    setNumResultsPerPage(newNumResultsPerPage);
  };

  const handleGifClicked = (gifSrc) => {
    setGifModalSrc(gifSrc);
  };

  const handleModalClosed = () => {
    setGifModalSrc('');
  };

  const GifModal = gifModalSrc !== ''
    ? (
      <GifModalComponent
        gifSrc={gifModalSrc}
        handleModalClosed={handleModalClosed}
      />
    ) : null;

  const PaginationComponent = (currentSearch) ? (
    <PaginationNavComponent
      count={totalResults}
      from={currentPage * defaultNumResults}
      to={(currentPage + 1) * defaultNumResults}
      handlePageChange={handlePageChange}
      handleResultsPerPageChange={handleResultsPerPageChange}
      pageNum={currentPage}
      numResultsPerPage={numResultsPerPage}
    />
    ) : null;

  const LoadIndicator = isSearching ? (<LoadIndicatorComponent />) : null;

  useEffect(() => {
    const getInitialTrendingGifs = async () => {
      const initialTrendingGifs = await getTrendingGifs(initialPage);

      setDiplayedGifs(initialTrendingGifs);
    };

    getInitialTrendingGifs();
  }, []);

  useEffect(() => {
    handleSearch(currentSearch);
  }, [numResultsPerPage]);

  return (
    <AppContainer column>
      <PaddedTypography variant="h2">
        Giphy Searcher
      </PaddedTypography>
      <BottomGutterDivider />
      <SearchContainer handleSearch={handleSearch} />
      <GifsContainer
        gifArray={displayedGifs}
        handleGifClicked={handleGifClicked}
      />
      { GifModal }
      { PaginationComponent }
      { LoadIndicator }
      <PaddedTypography variant="h6">
        Footer
      </PaddedTypography>
    </AppContainer>
  );
}

export default App;
