import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function DataGridDemo({ headers = [], rows = [], itemsSelected, checkboxSelection = false, ...props}) { 
  const columns: GridColDef[] = 
      headers
  ;

  const flattenedArray = rows.reduce((accumulator, currentArray) => { 
    return accumulator.concat(currentArray);
  }, []);

  const arrayWithUniqueUsers = flattenedArray.filter( 
    (value, index, self) =>
      self.findIndex((item) => item.id === value.id) === index
  );

  return (
      <DataGrid
        rows={arrayWithUniqueUsers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[20]}
        checkboxSelection={checkboxSelection} 
        disableRowSelectionOnClick 
        onRowSelectionModelChange={(item) => itemsSelected(item)} 
        autoHeight={true} 
        {...props}
      />
  );
}