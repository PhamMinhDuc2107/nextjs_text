const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const API_ENDPOINTS = {
   login: `${BASE_URL}/login`,
   logout: `${BASE_URL}/logout`,

   departments: `${BASE_URL}/departments`,
   getDepartment: (id: number | string) => `${BASE_URL}/departments/${id}`,
   updateDepartment: (id: number | string) => `${BASE_URL}/departments/${id}`,
   deleteDepartment: (id: number | string) => `${BASE_URL}/departments/${id}`,

   departmentTree: `${BASE_URL}/departments-tree`,
};
