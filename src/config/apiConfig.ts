const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const DEPARTMENT_URL = `${BASE_URL}/department`;
export const API_ENDPOINTS = {
   login: `${BASE_URL}/login`,
   logout: `${BASE_URL}/logout`,
   urlCSRF: `http://localhost:8000/sanctum/csrf-cookie`,
   department: `${DEPARTMENT_URL}`,
   getDepartment: (id: number | string) => `${DEPARTMENT_URL}/${id}`,
   updateDepartment: (id: number | string) => `${DEPARTMENT_URL}/${id}`,
   deleteDepartment: (id: number | string) => `${DEPARTMENT_URL}/${id}`,

   departmentTree: `${BASE_URL}/department-tree`,
};
