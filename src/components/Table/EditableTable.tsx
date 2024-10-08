import React, { useMemo, useState } from "react";
import { useTable,Column  } from "react-table";
import { IoMdArrowDropdown } from "react-icons/io";
import EditableCell from './Cell'

interface IStock {
    location: string;
    onHand: string;
}

const UpdateOnHandTable = () => {
  const [data, setData] = useState<IStock[]>([
    { location: "Warehouse", onHand: "5" },
    { location: "Store", onHand: "10" },
  ]);

  const columns: Column<IStock>[] = useMemo(
    () => [
      {
        Header: "Location",
        accessor: "location", 
        Cell: EditableCell,
      },
      {
        Header: "On Hand",
        accessor: "onHand", 
        Cell: EditableCell,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const updateMyData = (rowIndex:any, columnId:any, value:any) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <div className="w-full h-full">
      <table
        {...tableInstance.getTableProps()}
        className="min-w-full w-full table-fixed"
      >
        <thead style={{ backgroundColor: "rgb(225, 231, 235)" }}>
          {tableInstance.headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={crypto.randomUUID()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-0 py-2 border-b text-left text-sm font-semibold text-black border-2 border-gray-200"
                  key={crypto.randomUUID()}
                >
                  <div className="flex justify-start items-center">
                    <IoMdArrowDropdown size={20}/>
                    {column.render("Header")}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...tableInstance.getTableBodyProps()}>
          {tableInstance.rows.map((row) => {
            tableInstance.prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={crypto.randomUUID()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="border-2 border-gray-200 text-sm w-[50%] bg-gray-50 
                    whitespace-nowrap overflow-hidden text-ellipsis"
                    key={crypto.randomUUID()}
                  >
                    {cell.render("Cell", {
                      updateMyData,
                      rowIndex: row.index,
                      columnId: cell.column.id,
                    })}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


export default UpdateOnHandTable;
