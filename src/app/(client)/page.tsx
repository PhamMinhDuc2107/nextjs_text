"use client";
import Table from "@/components/Table/page";
import useDepartment from "@/hooks/useDepartment";
import { useEffect, useState } from "react";

export default  function Home() {
	let {getDepartment, isLoading, error} = useDepartment();
	const [departments, setDepartments] = useState([]);
	useEffect( () => {
		async function fetch() {
			let data = await getDepartment();
			setDepartments(data.data.data);
		}
		fetch()
	},[])
	
	
	
	if (isLoading) return <div className="fixed flex items-center justify-center top-0 right-0 bottom-0 left-0" style={{ backgroundColor: "rgb(184 184 185 / 50%)" }}
	>
		<div className="w-[80px] h-[80px]  transition-all bg-transparent rounded-full animate-spin border border-4 border-purple-400 border-t-transparent"></div>
	</div>;
	if (error) return <div>Error loading data</div>;
		
	return (
		<>
			<Table departments={departments}></Table>	
		</>
		
	); 
}
