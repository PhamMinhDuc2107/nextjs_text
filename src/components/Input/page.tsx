import React from 'react';
interface IProps {
   name: string;
   type: string;
   label: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
   required?: boolean;
   disabled?: boolean;
   className?: string;
   placeholder?: string;
   value?: string;
   defaultValue?: string,
}
const Input = ({name,label,type,className,onChange,onClick,...props}: IProps) => {
   return (
         <input
         type={type}
         name={name}
         id={label}
         onChange={onChange}
         onClick={onClick}
         className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 ${className}`}
         {...props}
         />
   );
};

export default Input;