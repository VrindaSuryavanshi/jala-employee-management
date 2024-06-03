import React from "react";

const DataPagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumber = [];
  //16 5
  console.log("data : ", dataPerPage, " totalD :", totalData);
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumber.map((number) => {
          return (
            <li class="page-item">
              <a onClick={() => paginate(number)} class="page-link" href="#">
                {number}
              </a>
            </li>
          );
        })}
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DataPagination;
