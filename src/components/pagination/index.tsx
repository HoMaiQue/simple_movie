import * as React from "react";
import ReactPaginate from "react-paginate";

export interface PaginationProps {
    handleChangePage: (selectedItem: { selected: number }) => void;
    totalPages: number;
}

export default function Pagination({handleChangePage, totalPages}: PaginationProps) {
   
    return (
        <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={totalPages}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            onPageChange={handleChangePage}
        ></ReactPaginate>
    );
}
