import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface DataGridDemoProps {
  headers?: GridColDef[];
  rows?: any[]; // Asegúrate de especificar el tipo correcto para tus datos de fila
  itemsSelected: (item: any) => void; // Especifica el tipo de itemsSelected
  checkboxSelection?: boolean;
}

export default function DataGridDemo({ headers = [], rows = [], itemsSelected, checkboxSelection = false, ...props}: DataGridDemoProps) { 
  const columns: GridColDef[] = headers;

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
