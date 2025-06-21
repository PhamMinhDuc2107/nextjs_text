'use client';
import React, { useState, useEffect } from 'react';
import TableView from './TableView';
import ModalView from './ModalView';
import useDepartment from "@/hooks/department/useDepartment";
import useDepartTree from '@/hooks/department/useDepartTree';
import { toast } from 'react-toastify';

const DepartmentView = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
    const [editData, setEditData] = useState<IDepartment | null>(null);

    const {
        getDepartment,
        handleDeleteDepartment,
        isLoading,
        error,
        page,
        handleSetPage,
        search,
        handleSearch,
    } = useDepartment();

    const { getDepartmentTree } = useDepartTree();

    const [departments, setDepartments] = useState<IDepartment[]>([]);
    const [departmentTree, setDepartmentTree] = useState<IDepartment[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [lastPage, setLastPage] = useState<number>(0);
    const [totalRecord, setTotalRecord] = useState<number>(0);

    const fetchDepartments = async () => {
        const data = await getDepartment();
        if (!error && data) {
            updateDepartmentList(data)
        }
    };

    const fetchDepartmentTree = async () => {
        const data = await getDepartmentTree();
        if (data) {
            setDepartmentTree(data);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, [page, search]);

    useEffect(() => {
        fetchDepartmentTree();
    }, []);

    const handleCreateModal = () => {
        setModalMode('create');
        setEditData(null);
        setIsModalOpen(true);
    };

    const handleEditModal = (department: IDepartment) => {
        setModalMode('edit');
        setEditData(department);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditData(null);
    };


    const handleDeleteDepart = async (id: number) => {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xoá phòng ban này?");
        if (!confirmDelete) return;

        const res = await handleDeleteDepartment(id);
        
        if (!res['success']) {
            toast.error("Xóa thất bại")
            return;
        }
        const  data =await getDepartment()
        let isDataPagi = data.data.length === 0 && page > 1;
        if(isDataPagi) {
            handleSetPage(page - 1)
            return
        }
        updateDepartmentList(data)
        toast.success("Xóa thành công")
    };
    const updateDepartmentList = (data: any) => {
        setDepartments(data.data);
        setCurrentPage(data.current_page);
        setLastPage(data.last_page);
        setTotalRecord(data.total);
    };

    return (
        <>
            <TableView 
                departments={departments}
                currentPage={currentPage}
                lastPage={lastPage}
                totalRecord={totalRecord}
                isLoading={isLoading}
                error={error}
                page={page}
                search={search}
                handleClickPage={handleSetPage}
                handleSearch={handleSearch}
                handleClickModal={handleCreateModal}
                handleEditModal={handleEditModal}
                handleDeleteDepart={handleDeleteDepart}
            />
            
            <ModalView 
                activeModal={isModalOpen}
                handleCloseModal={handleCloseModal}
                mode={modalMode}
                editData={editData}
                departmentTree={departmentTree}
                fetchDepart = {fetchDepartments}
                fetchDepartTree = {fetchDepartmentTree}
            />
        </>
    );
};

export default DepartmentView; 