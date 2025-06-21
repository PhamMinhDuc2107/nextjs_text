import { useState } from 'react';
import {
   departments,
   department,
   createDepartment,
   updateDepartment,
   deleteDepartment,
} from '@/services/department';

const useDepartment = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string[] | null>(null);
   const [page, setPage] = useState(1);
   const [search, setSearch] = useState('');

   const getDepartment = async (searchTerm?: string, targetPage?: number) => {
      try {
         setIsLoading(true);
         setError(null);
         const pageToUse = targetPage || page;
         const res = await departments(pageToUse, searchTerm || search);
         setIsLoading(false);
         return res.data;
      } catch (err) {
         const errorMessage = err.message || "Có lỗi xảy ra khi tải dữ liệu";
         setError(errorMessage);
         setIsLoading(false);
         throw err;
      }
   };

   const getDepartmentById = async (id: number) => {
      try {
         setIsLoading(true);
         setError(null);
         const res = await department(id);
         setIsLoading(false);
         return res.data;
      } catch (err) {
         const errorMessage = err.message || "Có lỗi xảy ra khi tải thông tin phòng ban";
         setError(errorMessage);
         setIsLoading(false);
         throw err;
      }
   };

   const handleCreateDepartment = async (data:IDepartmentPayload) => {
      try {
         setIsLoading(true);
         setError(null);
         const res = await createDepartment(data);
         setIsLoading(false);
         return res;
      } catch (err) {
         const errorMessage = Array.isArray(err.message) 
            ? err.message.join(', ') 
            : err.message || "Có lỗi xảy ra khi tạo phòng ban";
         setError(errorMessage);
         setIsLoading(false);
         throw err;
      }
   };

   const handleUpdateDepartment = async (id: number, data: any) => {
      try {
         setIsLoading(true);
         setError(null);
         const res = await updateDepartment(id, data);
         setIsLoading(false);
         return res;
      } catch (err) {
         const errorMessage = Array.isArray(err.message) 
            ? err.message.join(', ') 
            : err.message || "Có lỗi xảy ra khi cập nhật phòng ban";
         setError(errorMessage);
         setIsLoading(false);
         throw err;
      }
   };

   const handleDeleteDepartment = async (id: number) => {
      try {
         setIsLoading(true);
         setError(null);
         const res = await deleteDepartment(id);
         setIsLoading(false);
         return res;
      } catch (err) {
         const errorMessage = err.message || "Có lỗi xảy ra khi xóa phòng ban";
         setError(errorMessage);
         setIsLoading(false);
         throw err;
      }
   };

   const handleSetPage = (newPage: number) => {
      if (newPage !== page) setPage(newPage);
   };

   const handleSearch = (searchTerm: string) => {
      setSearch(searchTerm);
      setPage(1);
   };

   const clearSearch = () => {
      setSearch('');
      setPage(1);
   };

   const clearError = () => {
      setError(null);
   };

   return {
      getDepartment,
      getDepartmentById,
      handleCreateDepartment,
      handleUpdateDepartment,
      handleDeleteDepartment,
      isLoading,
      error,
      clearError,
      page,
      handleSetPage,
      search,
      setSearch,
      handleSearch,
      clearSearch,
   };
};

export default useDepartment;