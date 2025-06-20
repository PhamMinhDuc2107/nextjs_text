import React from 'react';

interface IProps {
   htmlFor: string;
   text: string;
   required?: boolean;
}

const Label = ({ htmlFor, text, required = false }: IProps) => {
   return (
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
         {text}
         {required && <span className="text-red-500 ml-1">*</span>}
      </label>
   );
};

export default Label;
