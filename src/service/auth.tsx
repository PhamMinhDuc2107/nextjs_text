import { API_ENDPOINTS } from "@/lib/apiConfig";
import Cookies from "js-cookie";

export const login = async (payload: LoginPayload) => {
	try {
		await fetch("http://localhost:8000/sanctum/csrf-cookie", {
			credentials: "include", 
		});
		const csrfToken = Cookies.get("XSRF-TOKEN");

		const res = await fetch(API_ENDPOINTS.login, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"X-XSRF-TOKEN": csrfToken ?? "",
			},
			credentials: "include", 
			body: JSON.stringify(payload),
		});
		const data = await res.json();
		
		if (!res.ok) throw new Error(data.message || "Login failed");

		return data;
	} catch (error: any) {
		throw error;
	}
};

export const logout = async () => {
	try {
		const csrfToken = Cookies.get("XSRF-TOKEN");
		const token = Cookies.get("token")
		const res = await fetch(API_ENDPOINTS.logout, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"X-XSRF-TOKEN": csrfToken ?? "",
				"Authorization": `Bearer ${token}`
			},
			credentials: "include",
		});
		if (!res.ok) {
			const errorData = await res.json();
			
			throw new Error(errorData.message || "Logout failed");
		}
		Cookies.remove("token");
	} catch (error: any) {
		console.error("Logout failed:", error.message);
		throw error;
	}
};
