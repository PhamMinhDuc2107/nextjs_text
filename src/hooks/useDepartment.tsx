

import React, { useState } from 'react';
import departments from '@/service/department';
const useDepartment = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   const getDepartment = async () => {
         try {
            setIsLoading(true);
            const res = await departments();
            setIsLoading(false);
            return res;
         } catch (err: any) {
            setError(err.message || "Unknown error");
            setIsLoading(false);
         }
      };
   return {getDepartment, isLoading, error};
};

export default useDepartment;