import { API_ENDPOINTS } from '@/config/apiConfig';
import Cookies from 'js-cookie';

const getAuthHeaders = async () => {
   await fetch(API_ENDPOINTS.urlCSRF, { credentials: "include" });
   const csrfToken = Cookies.get("XSRF-TOKEN");
   const token = Cookies.get("token");

   return {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer ${token}`,
      "X-XSRF-TOKEN": csrfToken ?? "",
   };
};

const departments = async (page: number, search?: string) => {
   try {
      const headers = await getAuthHeaders()

      const params = new URLSearchParams({ page: page.toString() });
      if (search && search.trim()) {
         params.append('search', search.trim());
      }
      const url = `${API_ENDPOINTS.department}?${params.toString()}`;
      const res = await fetch(url, {
         method: "GET",
         headers,
      });

      if (!res.ok) {
         const errorData = await res.json();
         throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
      }
      return res.json();
   } catch (error) {
      console.error("Department fetch error:", error.message);
      throw error;
   }
};

const department = async (id: number) => {
   try {
      const headers = await getAuthHeaders();
      const url = `${API_ENDPOINTS.getDepartment(id)}`;
      const res = await fetch(url, {
         method: "GET",
         headers,
         credentials: "include",
      });

      if (!res.ok) {
         const errorData = await res.json();
         throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
      }
      return res.json();
   } catch (error) {
      console.error("Department fetch error:", error.message);
      throw error;
   }
};

const createDepartment = async (data: IDepartmentPayload) => {
   try {
      const headers = await getAuthHeaders();
      const res = await fetch(API_ENDPOINTS.department, {
         method: "POST",
         headers,
         body: JSON.stringify(data),
         credentials: "include",
      });
      
      if (!res.ok) {
         const errorData = await res.json();
         if (errorData.errors) {
            const errorMessages = Object.values(errorData.errors).flat();
            throw new Error(errorMessages.join(', '));
         }
         throw new Error(errorData.message || `Tạo phòng ban thất bại: ${res.status}`);
      }
      return res.json();
   } catch (error) {
      console.error("Department create error:", error.message);
      throw error;
   }
};

const updateDepartment = async (id: number, data: IDepartmentPayload) => {
   try {
      const headers = await getAuthHeaders();
      const res = await fetch(API_ENDPOINTS.getDepartment(id), {
         method: "PUT",
         headers,
         body: JSON.stringify(data),
         credentials: "include",
      });
      
      if (!res.ok) {
         const errorData = await res.json();
         if (errorData.errors) {
            const errorMessages = Object.values(errorData.errors).flat();
            throw new Error(errorMessages.join(', '));
         }
         throw new Error(errorData.message || `Cập nhật phòng ban thất bại: ${res.status}`);
      }
      return res.json();
   } catch (error) {
      console.error("Update department error:", error.message);
      throw error;
   }
};

const deleteDepartment = async (id: number) => {
   try {
      const headers = await getAuthHeaders();
      
      const res = await fetch(API_ENDPOINTS.getDepartment(id), {
         method: "DELETE",
         headers,
         credentials: "include",
      });

      if (!res.ok) {
         const errorData = await res.json();
         throw new Error(errorData.message || `Xóa phòng ban thất bại: ${res.status}`);
      }
      return res.json();
   } catch (error) {
      console.error("Delete department error:", error.message);
      throw error;
   }
};

const departmentTree = async () => {
   try {
      const headers = await getAuthHeaders();

      const res = await fetch(API_ENDPOINTS.departmentTree, {
         method: "GET",
         headers,
         credentials: "include",
      });
      
      if (!res.ok) {
         const errorData = await res.json().catch(() => ({}));
         throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
      }
      return await res.json();
   } catch (error) {
      console.error("Department tree fetch error:", error.message);
      throw error;
   }
};

export {
   departments,
   department,
   departmentTree,
   createDepartment,
   updateDepartment,
   deleteDepartment,
}; 