'use client'

import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { insert } from './savedUsersSlice'
import { populateList } from './usersListSlice'

import Link from 'next/link'

import DataGridDemo from './Components/DataGrid'
import BasicButtons from './Components/Button'

import { Avatar } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'

const Home = () => {
    const usersList = useSelector((state: any) => state.usersList.value)
    const savedUsers = useSelector((state: any) => state.savedUsers.value)

    const [filterUsers, setFilterUsers] = useState([])
    const [buttonStatus, setButtonStatus] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (usersList.length == 0) {
            fetchData()
        } else {
            const flattenedArray = savedUsers.reduce(
                (accumulator: any, currentArray: any) => {
                    return accumulator.concat(currentArray)
                },
                []
            )

            setFilterUsers(flattenedArray)
        }
    }, [])

    const fetchData = async () => {
        const results = []
        const rows = []

        const response = await fetch(
            'https://random-data-api.com/api/v2/users?size=20'
        )
        const data = await response.json()
        results.push(data)
        rows.push({
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            gender: data.gender,
            avatar: data.avatar,
        })

        dispatch(populateList(results))
    }

    const columns: GridColDef[] = [
        { field: 'first_name', headerName: 'First Name', width: 200 },
        { field: 'last_name', headerName: 'Last Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'gender', headerName: 'Gender', width: 200 },
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 80,
            renderCell: (params) => (
                <Avatar alt={`Avatar-${params.value}`} src={params.value} />
            ),
        },
    ]

    const usersSelected = (userSelected: any) => {
        setFilterUsers(
            usersList[0][0]?.filter((user: any) =>
                userSelected.includes(user.id)
            )
        )
    }

    return (
        <div className="p-12">
            <h1 className="text-2xl text-center uppercase mb-10">User list</h1>
            <DataGridDemo
                checkboxSelection={true}
                headers={columns}
                rows={usersList[0]}
                itemsSelected={usersSelected}
                rowSelectionModel={filterUsers.map((user: any) => user.id)}
            />

            <div className="flex items-center">
                <BasicButtons
                    name="Save"
                    onClick={() => {
                        setButtonStatus(true),
                            setTimeout(() => {
                                setButtonStatus(false)
                            }, 1000)

                        dispatch(insert(filterUsers))
                    }}
                    className="!mt-10"
                />

                <Link
                    href="/saved"
                    className="border p-1.5 ml-2 px-4 mt-10 rounded uppercase"
                >
                    {buttonStatus ? 'Saving...' : 'Saved users'}
                </Link>
            </div>
        </div>
    )
}

export default Home
