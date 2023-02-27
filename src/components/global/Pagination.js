import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Pagination = ({ total, callback }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);

  const newArr = [...Array(total)].map((item, idx) => idx + 1);
  const navigate = useNavigate();

  const isActive = (index) => {
    if (index === page) return "active";
    return "";
  };

  const hdlPagination = (num) => {
    console.log("PAG onclickbutton => navigate(num)", num);
    navigate(`?page=${num}`);
  };

  useEffect(() => {
    callback(page);
    //updaste data
  }, [page]);

  useEffect(() => {
    console.log("PAG useEffect:searchParams");
    let newPage = searchParams.get("page");
    if (newPage) {
      setPage(parseInt(newPage));
    }
  }, [searchParams]);

  return (
    <nav aria-label="Page navigation example">
     
      <ul class="inline-flex -space-x-px">
        {page > 1 && (
          <li
            class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => hdlPagination(page - 1)}
          >
            Previous
          </li>
        )}

        {newArr.map((num) => {
          return (
            <li
              onClick={() => hdlPagination(num)}
              className={`${isActive(
                num
              )} px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {num}
            </li>
          );
        })}

        {page < total && (
          <li
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => hdlPagination(page + 1)}
          >
            Next
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
