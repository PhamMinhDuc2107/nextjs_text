import React from 'react';

interface IProps {
   children: React.ReactNode;
   type?: 'button' | 'submit' | 'reset';
   className?: string;
   onSubmit?: () => void;
   onClick?: () => void;
   disabled?: boolean;
}


const Button = ({ children, className = '', ...rest }: IProps) => {
   return (
      <button
         className={`px-4 py-2 rounded-md  text-white  disabled:opacity-50 cursor-pointer ${className}`}
         {...rest}
      >
         {children}
      </button>
   );
};

export default Button;
