import React from 'react';
import DropdownItem from '@/components/Dropdown/DropdownItem';

interface IProps {
   departments: IDepartment[],
   activeDropdown: boolean,
   handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

const Dropdown = (props: IProps) => {
   const { departments, activeDropdown, handleClick } = props;
   
   if (!activeDropdown) return null;
   
   console.log(departments);
   
   return (
      <div className="absolute w-full">
         <ul className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow z-10 max-h-[200px] overflow-auto">
            <DropdownItem 
               handleClick={handleClick} 
               item={{ id: 0, name: "Không có cha", parent_id:null }}
            />
            {departments.length > 0 && departments.map((item) => (
               <DropdownItem 
                  handleClick={handleClick} 
                  item={item}  
                  key={item.id}
               />
            ))}
         </ul>
      </div>
   );
};

export default Dropdown;