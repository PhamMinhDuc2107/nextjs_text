"use client"
import useDepartTree from '@/hooks/department/useDepartTree';
import React, {useEffect, useState}from 'react';
import Loading from '@/components/Loading/page';
const DepartmentTree = () => {
   let {getDepartmentTree, isLoading, error} = useDepartTree();
   const [departments, setDepartments] = useState([]);
   useEffect( () => {
      async function fetchData() {
         let data = await getDepartmentTree();
         if(!error) {
            setDepartments(data);
         }
      }
      fetchData()
   },[])
	if (isLoading) return <Loading isLoading={isLoading}/>
   return (
      <div className='container'>
         <ul className=" ml-4 border-l border-gray-300 pl-4">
               {!isLoading && departments && departments.map((item, i) => (
               <li key={item?.id ?? i} className="mb-1">
                  <div className="font-medium text-gray-700">{'\u00A0\u00A0'.repeat(item?.level) + item?.name}</div>
               </li>
               ))}
            </ul>
      </div>
   );
};

export default DepartmentTree;