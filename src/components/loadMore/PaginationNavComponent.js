import { TablePagination } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { defaultNumResults } from "../../managers/APIManager";

const intArray = [1, 2, 3, 4];

const numResultsOptions = intArray.map((intVal) => intVal * defaultNumResults);

export default function PaginationNavComponent(props) {
  const handlePageChange = (e, newPage) => {
    props.handlePageChange(newPage);
  };

  const handleResultsPerPageChange = (e) => {
    console.log('results per page change');
    console.log(e.target.value);
  };

  return (
    <table>
      <tbody>
        <tr>
          <TablePagination
            labelRowsPerPage="Results per page:"
            onChangePage={handlePageChange}
            page={props.pageNum}
            rowsPerPage={defaultNumResults}
            onChangeRowsPerPage={handleResultsPerPageChange}
            rowsPerPageOptions={numResultsOptions}
            count={props.count}
          />
        </tr>
      </tbody>
    </table>
  );
}
