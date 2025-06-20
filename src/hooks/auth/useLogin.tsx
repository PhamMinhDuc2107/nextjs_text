// hooks/useLogin.ts
import { useState } from "react";
import { login } from "@/services/auth";
import { toast } from "react-toastify";

export function useLogin() {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const handleLogin = async (payload: LoginPayload) => {
      try {
         setLoading(true);
         const res = await login(payload);
         setLoading(false);
         toast.success("Đăng nhập thành công")
         return res;
      } catch (err: any) {
         toast.warn(err.message)
         setError(err.message)
         setLoading(false);
      }
   };
   return { handleLogin, loading, error };
}
