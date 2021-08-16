import React from 'react'
import { useTable } from 'react-table'
 
 function Second() {
   const data = React.useMemo(
     () => [
       {
         col1: 'Saptarshi',
         col2: 'IT',
         col3: 55,
       },
       {
         col1: 'Prince',
         col2: 'Electrical',
         col3: 75,
       },
       {
         col1: 'Tony',
         col2: 'Computer',
         col3: 85,
       },
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'Name',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Field',
         accessor: 'col2',
       },
       {
        Header: 'Result',
        accessor: 'col3',
      },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }

 export default Second