import { API_ENDPOINTS } from '@/lib/apiConfig';
import React from 'react';
import Cookies from 'js-cookie';
const departments = async () => {
   try {
      await fetch("http://localhost:8000/sanctum/csrf-cookie", {
			credentials: "include", 
		});
		const csrfToken = Cookies.get("XSRF-TOKEN");
      const token = Cookies.get("token");
      const res = await fetch(API_ENDPOINTS.departments, {
         method:"GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-XSRF-TOKEN": csrfToken ?? "",
         },
      }) 
      if (!res.ok) {
			return;
		}
      const data =await res.json();
		return data;
   }catch (error: any) {
		console.error("Login error:", error.message);
		throw error;
	}
};

export default departments;