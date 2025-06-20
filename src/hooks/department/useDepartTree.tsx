"use client"
import {useState} from 'react';
import { departmentTree} from "@/services/department"
const useDepartTree = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<string[]|null >(null);
   const getDepartmentTree = async () => {
         try {
            setIsLoading(true);
            const res = await departmentTree();
            setIsLoading(false);
            return res.data;
         } catch (err: any) {
            setError(err.message || "Unknown error");
            setIsLoading(false);
         }
      };
   return {getDepartmentTree, isLoading, error};
};

export default useDepartTree;