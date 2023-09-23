'use client'

import { useSelector } from 'react-redux'

import DataGridDemo from '../Components/DataGrid'

import { Avatar } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { useRouter } from 'next/navigation'

export default function Index() {

  const router = useRouter()

 
  const users = useSelector((state: any) => state.savedUsers.value) 
  
  const columns: GridColDef[] = [
    {field: 'first_name', headerName: 'First Name', width: 200 },
    {field: 'last_name', headerName: 'Last Name', width: 200 },
    {field: 'email', headerName: 'Email', width: 200 },
    {field: 'gender', headerName: 'Gender', width: 200 },
    {field: 'avatar', headerName: 'Avatar', width: 80, renderCell: (params) => (
      <Avatar alt={`Avatar-${params.value}`} src={params.value} />
    )},
  ]

  return (
    <div className='p-12' >
      <h1 className='text-2xl text-center uppercase mb-10'>Saved users</h1>

      <DataGridDemo headers={columns} rows={users}></DataGridDemo>

      <div className='flex items-center'>
        <button onClick={() => router.back()} className='border p-1.5 ml-2 px-4 mt-10 rounded uppercase'>Users list</button>
      </div>
    </div>
  )
}
