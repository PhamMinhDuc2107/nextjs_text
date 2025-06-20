import React from 'react';

interface IProps {
   departments: IDepartment[];
   searchInput: string;
   setSearchInput: (value: string) => void;
   handleSearchSubmit: (e: React.FormEvent) => void;
   search: string;
   handleClearSearch: () => void;
	totalRecord?: number,
	handleClickModal: () => void;
	handleEditModal: (department: IDepartment) => void;
	handleDeleteDepart: (id: number) => void;
}

const Table = (props: IProps) => {	
   const { 
      departments, 
      searchInput, 
      setSearchInput, 
      handleSearchSubmit, 
      search, 
      handleClearSearch,
      handleClickModal,
      handleEditModal,
      totalRecord,
      handleDeleteDepart
   } = props;

   return (
      <div className="container mx-auto my-10">
         <div className="flex py-2 mb-4 items-center justify-between">
            <form onSubmit={handleSearchSubmit}>
               <input 
                  type="text" 
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className='border border-gray-400 rounded-md focus:border-blue-500 p-2 mr-3 min-w-[300px]' 
                  placeholder='Nhập phòng ban cần tìm kiếm...'
               />
               <button 
                  type='submit' 
                  className='p-2 border cursor-pointer text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 bg-blue-500 rounded-md'
               >
                  Tìm kiếm
               </button>
               {search && (
                  <button 
                     type='button'
                     onClick={handleClearSearch}
                     className='p-2 ml-2 border cursor-pointer text-gray-600 hover:border-gray-500 hover:bg-gray-100 bg-white rounded-md'
                  >
                     Xóa tìm kiem
                  </button>
               )}
            </form>
            <button onClick={handleClickModal} className='p-2 border cursor-pointer text-white hover:border-emerald-600 hover:bg-transparent hover:text-emerald-600 bg-emerald-600 rounded-md'>
               Tạo phòng ban
            </button>
         </div>

         {search && (
            <div className="mb-4 text-sm text-gray-600">
               Tìm kiếm: "<strong>{search}</strong>" - {totalRecord} kết quả
            </div>
         )}
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
                        Thao tác
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {departments && departments.length > 0 ? (
                     departments.map((item: IDepartment) => (
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
                              <button 
                                 onClick={() => handleEditModal(item)}
                                 className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                              >
                                 Sửa
                              </button>
                              <button 
                                 onClick={() => handleDeleteDepart(item.id)}
                                 className='font-medium text-red-500 hover:underline cursor-pointer'
                              >
                                 Xóa
                              </button>
                           </td>
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                           {search ? `Không tìm thấy kết quả cho "${search}"` : 'Không có dữ liệu'}
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>	
         </div>
      </div>
   );
};

export default Table;