import React from 'react'
import { useTable } from 'react-table';

export interface ITable{
    columns:{
        Header:string,
        accessor:string,
        Cell:any,
    }[] ,
    data:any,
    updateData:any
}

function Table({columns,data}:ITable) {

  const tableInstance = useTable({ columns, data });
  
  (
    <div className="p-4">
      <table {...tableInstance.getTableProps()} className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-50">
          {tableInstance.headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 border-b border-gray-200 bg-gray-300 text-left text-xs font-medium text-black uppercase tracking-wider"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...tableInstance.getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {tableInstance.rows.map((row) => {
            tableInstance.prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b border-gray-200"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table