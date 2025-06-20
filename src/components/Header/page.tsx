
import React from 'react';
import Link from 'next/link';
import { useLogout } from '@/hooks/auth/useLogout';
const Header = () => {
   const { handleLogout, loading } = useLogout();
   
   return (
      <header className="bg-white">
         <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
               <a href="#" className="-m-1.5 p-1.5">
               <span className="sr-only">Your Company</span>
               <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
               </a>
            </div>
            <div className="flex lg:hidden">
               <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
               <span className="sr-only">Open main menu</span>
               <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
               </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
               <Link href={'/department'} className="text-sm/6 font-semibold text-gray-900">Phòng ban</Link>
               <Link href={'/department/tree'} className="text-sm/6 font-semibold text-gray-900">Phòng ban dạng cây</Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
               <button onClick={handleLogout} disabled={loading}  className='px-4 py-3 bg-red-500 cursor-pointer text-white hover:opacity-50 rounded-2xl'>Logout</button>
            </div>
         </nav>
      </header>
   );
};

export default Header;