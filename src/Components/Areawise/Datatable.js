import React, { useMemo } from "react";
import { useTable,useSortBy,useGlobalFilter, usePagination} from "react-table";
import {COLUMNS} from "./columns"
import MOCK_DATA from "./MOCK_DATA.json"
import "./Table.css";
import { BiDownArrowAlt,BiUpArrowAlt} from "react-icons/bi";
// import Globalfilter from "./Globalfilter";

function Datatable() {


  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize
  } = useTable({columns,data},useGlobalFilter,useSortBy,usePagination);

  const {globalFilter,pageIndex,pageSize}=state

  return (
    <>

  <div className="d-flex justify-content-between mb-3">
<select
  value={pageSize}
  onChange={(e) => setPageSize(Number(e.target.value))}
>
  {[10, 25, 50, 100].map((pageSize) => (
    <option key={pageSize} value={pageSize}>
      show {pageSize} entries
    </option>
  ))}
</select>

<span>
search:{" "}
<input
  value={globalFilter || " "}
  onChange={(e) => setGlobalFilter(e.target.value)}
/>
</span>
</div>

      <table {...getTableProps()}>
      
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                <span>
                  { column.isSortedDesc ? <BiDownArrowAlt/> : <BiUpArrowAlt/> }
                </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {<tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  
                })}
              </tr>
            )
          })}
        </tbody>}
      </table>
      
      <div>
      <span>
      Page{" "}
      <strong>
      {pageIndex + 1} of {pageOptions.length}
      </strong>
      </span>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
      </div>
    </>
    
  );
}

export default Datatable;
