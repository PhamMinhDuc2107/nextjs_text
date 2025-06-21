// hooks/useLogin.ts
import { useState } from "react";
import { login } from "@/services/auth";
import { toast } from "react-toastify";

export function useLogin() {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const handleLogin = async (payload: ILoginPayload) => {
      try {
         setIsLoading(true);
         setError(null)
         const res = await login(payload);
         console.log(res);
         setIsLoading(false);
         return res;
      } catch (err: any) {
         setError(err.message)
         setIsLoading(false);
         return
      }
   };
   return { handleLogin, isLoading, error };
}
