'use client';
import React, { useState, useEffect } from 'react';
import Modal from "@/components/Modal/page";
import Input from "@/components/Input/page";
import Label from "@/components/Label/page";
import Field from "@/components/Field/page";
import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/page";
import useDepartment from "@/hooks/department/useDepartment";
import { toast } from 'react-toastify';

interface IProps {
    activeModal: boolean;
    handleCloseModal: () => void;
    mode: 'create' | 'edit';
    editData?: IDepartment | null;
    departmentTree: IDepartment[];
    fetchDepartTree:()=> void;
    fetchDepart: () => void
}

const ModalView = ({ activeModal, handleCloseModal, mode, editData, departmentTree,fetchDepartTree, fetchDepart }: IProps) => {
    const { handleCreateDepartment, handleUpdateDepartment, error } = useDepartment();

    const [isDropdown, setIsDropdown] = useState<boolean>(false);
    const [valueDrop, setValueDrop] = useState<string>("");
    const [payload, setPayload] = useState<IDepartmentPayload>({
        name: '',
        parent_id: null,
        id: null,
    });

    useEffect(() => {
        if (mode === 'edit' && editData) {
            setPayload({
                id: editData.id,
                name: editData.name,
                parent_id: editData.parent_id
            });
            
            if (editData.parent_id) {
                const parentDept = departmentTree.find(dept => dept.id === editData.parent_id);
                setValueDrop(parentDept?.name || "");
            } else {
                setValueDrop("Không có cha");
            }
        } else {
            setPayload({ name: '', parent_id: null });
            setValueDrop("");
        }
    }, [mode, editData]);
    const handleClickDropdown = () => {
        setIsDropdown(true);
    };

    const handleClickOption = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target;
        const id = target.dataset.id;
        const name = target.textContent || "";
        
        setValueDrop(name);
        if (!id || id === "0") {
            setPayload({ ...payload, parent_id: null });
            return;
        }
        setPayload({ ...payload, parent_id: Number(id) });
        setIsDropdown(false);
    };

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            let res;
            if (mode === 'create') {
                res = await handleCreateDepartment(payload);
            } else {
                if (!editData?.id) return;
                res = await handleUpdateDepartment(editData.id, payload);
            }
            
            if (res) {
                const message = mode === 'create' ? "Tạo phòng ban thành công" : "Cập nhật phòng ban thành công";
                toast.success(message);
                handleCloseModal();
                setPayload({ name: '', parent_id: null });
                setValueDrop("");
                await fetchDepart();
                await fetchDepartTree();
                setIsDropdown(false);
            }
        } catch (err: any) {
            const message = err.message || (mode === 'create' ? "Có lỗi xảy ra khi tạo phòng ban" : "Có lỗi xảy ra khi cập nhật phòng ban");
            toast.error(message);
        }
    };

    const handleClose = () => {
        handleCloseModal();
        setPayload({ name: '', parent_id: null });
        setValueDrop("");
        setIsDropdown(false);
    };

    if (!activeModal) return null;

    const title = mode === 'create' ? "Thêm phòng ban" : "Sửa phòng ban";
    const buttonText = mode === 'create' ? "Tạo phòng ban" : "Cập nhật";

    return (
        <Modal title={title} activeModal={activeModal}>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmitForm}>
                <Field>
                    <Label htmlFor="name" text="Tên phòng ban" />
                    <Input 
                        name="name" 
                        label="name" 
                        placeholder="Nhập tên phòng ban" 
                        type="text" 
                        defaultValue={payload.name}
                        onChange={(e) => setPayload({ ...payload, name: e.target.value })}
                    />
                </Field>
                
                <Field className="relative">
                    <Label htmlFor="parent_id" text="Cha" />
                    <Input 
                        name="parent_id" 
                        label="parent_id" 
                        onClick={handleClickDropdown}  
                        className="cursor-pointer"  
                        type="text" 
                        defaultValue={valueDrop}
                        placeholder='Chọn phòng ban cha'
                        readOnly
                    />
                    <Dropdown 
                        handleClick={handleClickOption} 
                        activeDropdown={isDropdown}  
                        departments={departmentTree}
                    />
                </Field>
                
                <div className="flex gap-3">
                    <Button 
                        type="button" 
                        className="bg-red-500" 
                        onClick={handleClose}
                    >
                        Hủy
                    </Button>
                    <Button 
                        type="submit" 
                        className="bg-emerald-600"
                    >
                        {buttonText}
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default ModalView; 