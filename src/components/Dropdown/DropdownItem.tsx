import React from 'react';
interface IProps {
   item: IDepartment;
   handleClick: (e: React.MouseEvent<HTMLElement>) => void
}
const DropdownItem = (props:IProps) => {
   let {item, handleClick} = props;
   return (
      <li><a onClick={handleClick}  className="block px-4 py-2 hover:bg-gray-100" data-id={item.id}>{"-".repeat(item?.level ?? 0)+`${item.name}`}</a></li>
   );
};

export default DropdownItem;