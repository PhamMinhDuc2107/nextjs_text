'use client';
import React, { useState } from 'react';
import Table from '@/components/Table/page';
import Loading from '@/components/Loading/page';
import Pagination from "@/components/Pagination/page";
import { toast } from 'react-toastify';

interface IProps {
    departments: IDepartment[];
    currentPage: number;
    lastPage: number;
    totalRecord: number;
    isLoading: boolean;
    error: string | null;
    page: number;
    search: string;
    
    handleClickPage: (page: number) => void;
    handleSearch: (search: string) => void;
    handleClickModal: () => void;
    handleEditModal: (department: IDepartment) => void;
    handleDeleteDepart: (id: number) => Promise<void>;
}

const TableView = ({ 
    departments,
    currentPage,
    lastPage,
    totalRecord,
    isLoading,
    error,
    search,
    handleClickPage,
    handleSearch,
    handleClickModal,
    handleEditModal,
    handleDeleteDepart
}: IProps) => {
    const [searchInput, setSearchInput] = useState<string>('');

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSearch(searchInput);
    };

    const handleClearSearch = () => {
        setSearchInput('');
        handleSearch('');
    };

    if (error) return <div>Error loading data</div>;
    if (isLoading) return <Loading isLoading={isLoading} />;

    return (
        <>
            <Table
                departments={departments}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                handleSearchSubmit={handleSearchSubmit}
                search={search}
                handleClearSearch={handleClearSearch}
                totalRecord={totalRecord}
                handleClickModal={handleClickModal}
                handleEditModal={handleEditModal}
                handleDeleteDepart={handleDeleteDepart}
            />

            <Pagination
                handle={handleClickPage}
                lastPage={lastPage}
                currentPage={currentPage}
                groupSize={3}
            />
        </>
    );
};

export default TableView; 