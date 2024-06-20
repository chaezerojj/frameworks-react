import React from 'react';
import {
  GridToolbarContainer,
  GridToolbarExport, gridClasses
} from '@mui/x-data-grid';
// 데이터를 CSV로 내보내는 기능 구현(GridToolbarContainer, GridToolbarExport, gridClasses)


function CustomToolbar() {


  return (
    <>
      <GridToolbarContainer
        className={gridClasses.toolbarContainer}>
        <GridToolbarExport />
      </GridToolbarContainer>
    </>
  )
}

export default CustomToolbar;