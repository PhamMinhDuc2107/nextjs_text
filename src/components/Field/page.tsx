import React, { ReactNode } from 'react';

interface IProps {
   children: ReactNode;
   className?: string;
}

const Field = ({ children, className = '' }: IProps) => {
   return (
      <div className={`mb-4 ${className}`}>
         {children}
      </div>
   );
};

export default Field;
