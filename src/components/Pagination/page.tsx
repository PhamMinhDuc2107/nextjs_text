import React from 'react';
interface IProps {
   classC?: string|null,
   lastPage: number,
   currentPage:number,
   groupSize : number,
   handle: (page: number) => void,
}
const Pagination = (props:IProps) => {
   let {classC,lastPage, currentPage, handle, groupSize} = props;
   let groupIndex = Math.floor((currentPage - 1) / groupSize);
   let start = groupIndex * groupSize + 1;
   let end = Math.min(start + groupSize - 1, lastPage);
   
   
   return (
      <nav className={`flex items-center flex-column flex-wrap md:flex-row justify-center   ${classC} container`} aria-label="Table navigation">
					<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
							<li>
                        <button
                           onClick={() => start > 1 && handle(start - 1)}
                           disabled={start <= 1}
                           className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-gray-300 rounded-s-lg
                              ${start <= 1
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}
                        >
                           Previous
                        </button>
                        </li>

                        {Array.from({ length: end - start + 1 }, (_, i) => {
                        const page = start + i;
                        return (
                           <li key={page}>
                              <button
                              onClick={() => handle(page)}
                              className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
                                 page === currentPage
                                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                                    : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                              } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                              >
                              {page}
                              </button>
                           </li>
                        );
                        })}

                        <li>
                        <button
                           onClick={() => end < lastPage && handle(end + 1)}
                           disabled={end >= lastPage}
                           className={`flex items-center justify-center px-3 h-8 border border-gray-300 rounded-e-lg
                              ${end >= lastPage
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}
                        >
                           Next
                        </button>
                        </li>

					</ul>
				</nav>
   );
};

export default Pagination;