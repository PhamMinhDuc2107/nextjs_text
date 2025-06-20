import React from 'react';

interface IProps {
   title: string;
   activeModal: boolean;
   children?: React.ReactNode;
}

const Modal = ({ title, activeModal, children }: IProps) => {
   if (!activeModal) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#cbbaba8f] bg-opacity-50">
         <div className="bg-white rounded-lg shadow-lg p-6 w-[500px] max-w-full">
         <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
         <div>{children}</div>
         </div>
      </div>
   );
};

export default Modal;
