import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import Data from "../data.json";
import { COLUMNS } from "./columns";
import Globalfilter from './Globalfilter';
import "../Second.css"

function SortingTable() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Data, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
      } = useTable({
        columns,
        data
    }, 
    useGlobalFilter,
    useSortBy)

    const { globalFilter } = state

    return (
        <>
        <Globalfilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                                    </span>
                                </th>
                            ))
                        }
                    </tr>
                    ))
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default SortingTable
