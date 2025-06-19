import React from 'react';
interface IProps {
   departments: IDepartment[]

}
const Table = (props: IProps) => {	
   let {departments} = props;
   return (
      <div className="container mx-auto my-10">
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="p-4">
									<div className="flex items-center">
											#
									</div>
								</th>	
								<th scope="col" className="px-6 py-3">
									Phòng ban
								</th>
								<th scope="col" className="px-6 py-3">
									Phòng ban cha
								</th>
								<th scope="col" className="px-6 py-3">
								</th>
							</tr>
					</thead>
					<tbody>
							{departments && departments.length > 0 && departments.map((item: IDepartment) => (
								<tr key={item?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="w-4 p-4">
									{item?.id}
								</td>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{item.name}
								</th>
								<td className="px-6 py-4">
									{item?.parent?.name ?? "Không có"}
								</td>
								<td className="px-6 py-4 flex gap-3 justify-center items-center">
									<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                           <a href="#" className='font-medium text-red-500 hover:underline'>Delete</a>
								</td>
							</tr>
							))}
					</tbody>
				</table>	
				<nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
					<span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
					<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
							<li>
								<a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
							</li>
							<li>
								<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
							</li>
							<li>
								<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
							</li>
							<li>
								<a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
							</li>
							<li>
								<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
							</li>
							<li>
								<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
							</li>
							<li>
					<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
							</li>
					</ul>
				</nav>
			</div>
		</div>
   );
};

export default Table;