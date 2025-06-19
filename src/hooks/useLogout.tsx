import { useState } from "react";
import { logout } from "@/service/auth"; 
import { useRouter } from "next/navigation";

export function useLogout() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleLogout = async () => {
		try {
			setLoading(true);
			await logout();
			setLoading(false);
			router.push("/login");
		} catch (err: any) {
			setError(err.message || "Đăng xuất thất bại");
			setLoading(false);
		}
	};

	return { handleLogout, loading, error };
}
